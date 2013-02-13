/**
 * Main simpleEdit App.
 * Load all the AngularJS Dependy.
 */

// Use: define(['simple'], function (simplle) {var simpleApp = simple.app();})
define([
  'simple/app',
  'angular',
  'angularui',
  'simple/controllers/sideBar',
  'simple/controllers/fileSystemController',
  'simple/services/layoutManager',
  'simple/services/documentService',
  'simple/services/menuService'], function (simple) {

    simple.App = angular.module('simpleEdit', ['ui.directives', 'simpleEdit.fileSystem', 'simpleEdit.sidebar', 'simpleEdit.layoutManager', 'simpleEdit.documentService', 'simpleEdit.menuService']);

});
