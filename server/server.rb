require 'sinatra'
require 'sinatra/cross_origin'
require 'json'

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

options "*" do
  response.headers["Allow"] = "GET, POST, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
  response.headers["Access-Control-Allow-Origin"] = "*"
  return (200)
end
