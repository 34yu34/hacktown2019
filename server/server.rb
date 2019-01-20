require 'sinatra'
require 'sinatra/cross_origin'
require 'json'
require 'net/http'

set(:port, 3000)

configure do
  enable :cross_origin
end

before do
  response.headers['Access-Control-Allow-Origin'] = '*'
end

get('/') do
  blah = {h: "hello", b: "hello"}
  return JSON.generate(blah)
end

get('/signalisation') do
  uri = URI('http://donnees.ville.montreal.qc.ca/dataset/8ac6dd33-b0d3-4eab-a334-5a6283eb7940/resource/52cecff0-2644-4258-a2d1-0c4b3b116117/download/signalisation.json')
  JSON.parse(Net::HTTP.get(uri))
end

options "*" do
  response.headers["Allow"] = "GET, POST, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
  response.headers["Access-Control-Allow-Origin"] = "*"
  return (200)
end
