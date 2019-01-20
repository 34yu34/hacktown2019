require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'
require 'net/http'
require 'byebug'

class Server < Sinatra::Base
  set(:port, 3000)

  configure do
    enable :cross_origin
    file = File.open("data.json", "r")
    @@data = JSON.parse(file.read()).map do |key, val|
      if (key === String)
        [key, val.gsub(/\\x[A-Fa-f0-9]{2}/){|x| x[0..1] + "00" + x[2..3]}]
      else
        [key, val]
      end
    end
    @@data = @@data.to_h
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get('/') do
    body(@@data.to_h.to_json)
    status(200)
  end

  get('/paneaux/:latitude/:longitude/:radius') do
    @@data.select { |value| Math.hypot((value['Latitude'].to_f - params[:latitude].to_f), (value['Longitude'].to_f - params[:longitude].to_f)) <= params[:radius]/100 }.to_json
  end #considering 0.01 degrees is a km, in params, we get in km!

  get('/paneaux/:latitude/:longitude') do
    @@data.select { |value| Math.hypot((value['Latitude'].to_f - params[:latitude].to_f), (value['Longitude'].to_f - params[:longitude].to_f)) <=  0.01 }.to_json
  end

  options '*' do
    response.headers['Allow'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
    response.headers['Access-Control-Allow-Origin'] = '*'
    return 200
  end
end

Server.run!
