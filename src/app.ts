import * as angular from 'angular';
import { routes } from './routes';
import { HomeController, initHomeController } from './controllers/HomeController';

const app = angular.module('app', ['ui.router']);
var search = "yasssss";
app.config(routes);
initHomeController();
