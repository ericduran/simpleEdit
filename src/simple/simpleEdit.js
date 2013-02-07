/**
 * Main simpleEdit App.
 * Load all the AngularJS Dependy.
 */

// Use: define(['simple'], function (simplle) {var simpleApp = simple.app();})
define([
  'simple/app',
  'angular',
  'simple/controllers/fileSystemController',
  'simple/services/documentService',
  'simple/services/menuService'], function (simple) {

    simple.App = angular.module('simpleEdit', ['simpleEdit.fileSystem', 'simpleEdit.documentService', 'simpleEdit.menuService']);

});
