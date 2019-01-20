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
    data = 0#TODO somehow, get the data
    data.select { |key, value| Math.hypot(value.Latitude-params[:latitude], value.Longitude-params[:longitude]) <= params[:radius]/100 }
  end #considering 0.01 degrees is a km, in params, we get in km!

  get('/paneaux/:latitude/:longitude') do
    data = 0#TODO somehow, get the data
    data.select { |key, value| Math.hypot(value.Latitude-params[:latitude], value.Longitude-params[:longitude]) <=  0.01 }
  end

  options '*' do
    response.headers['Allow'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
    response.headers['Access-Control-Allow-Origin'] = '*'
    return 200
  end
end

Server.run!
