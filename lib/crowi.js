const request = require('request');
const endPoints = require('./endPoints.js');
const dataName = require('./dataName')

class Client {
  constructor(option) {
    this.baseUrl = option.baseUrl;
    this.token = option.token;
  }

  api(apiName, option, callback) {
    const endPoint = endPoints[apiName];
    if(endPoint.method === 'POST'){
      return this.postApi(endPoint, apiName, option, callback);
    }else if(endPoint.method === 'GET'){
      return this.getApi(endPoint, apiName, option, callback);
    }
  }  

  postApi(endPoint, apiName, option, callback){
    endPoint.baseUrl = this.baseUrl;
    option['access_token'] = this.token;
    endPoint.json = option;
    endPoint.headers = {'Content-type' : 'application/json'};
    if(!callback) {
      return new Promise((resolve, reject) => {
        request(endPoint, (err, res, body) => {
          console.log(body);
          if(err) {
            reject(err);
          } else {
            if(body.ok){
              resolve(body[dataName[apiName]]);
            }else{
              reject(body.error);
            }
          }
        });
      });
    }else{
      request(endPoint, (err, res, body) => {
        if(err){
          callback(err, body[dataName[apiName]]);
          return;
        }
        if(!body.ok){
          callback(body.error, body);
          return;
        }
        callback(null, body[dataName[apiName]]);
      });
    }
  }

  getApi(endPoint, apiName, option, callback){
    endPoint.baseUrl = this.baseUrl;
    option['access_token'] = this.token;
    endPoint.qs = option;
    endPoint.json = true;
    if(!callback) {
      return new Promise((resolve, reject) => {
        request(endPoint, (err, res, body) => {
          if(err) {
            reject(err);
          } else {
            if(body.ok){
              resolve(body[dataName[apiName]]);
            }else{
              reject(body.error);
            }
          }
        });
      });
    }else{
      request(endPoint, (err, res, body) => {
        if(err){
          callback(err, body[dataName[apiName]]);
          return;
        }
        if(!body.ok){
          callback(body.error, body);
          return;
        }
        callback(null, body[dataName[apiName]]);
      });
    }
  }
}

module.exports = Client;
