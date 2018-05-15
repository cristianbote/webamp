(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Webamp"] = factory();
	else
		root["Webamp"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpWebamp"];
/******/ 	window["webpackJsonpWebamp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0,
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "webamp." + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 128);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(146);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _from = __webpack_require__(107);

var _from2 = _interopRequireDefault(_from);

exports.play = play;
exports.pause = pause;
exports.stop = stop;
exports.nextN = nextN;
exports.next = next;
exports.previous = previous;
exports.seekForward = seekForward;
exports.seekBackward = seekBackward;
exports.close = close;
exports.setVolume = setVolume;
exports.adjustVolume = adjustVolume;
exports.scrollVolume = scrollVolume;
exports.setBalance = setBalance;
exports.toggleRepeat = toggleRepeat;
exports.toggleShuffle = toggleShuffle;
exports.addTracksFromReferences = addTracksFromReferences;
exports.loadFilesFromReferences = loadFilesFromReferences;
exports.fetchMediaDuration = fetchMediaDuration;
exports.loadMediaFiles = loadMediaFiles;
exports.loadMediaFile = loadMediaFile;
exports.fetchMediaTags = fetchMediaTags;
exports.setSkinFromArrayBuffer = setSkinFromArrayBuffer;
exports.setSkinFromFileReference = setSkinFromFileReference;
exports.setSkinFromUrl = setSkinFromUrl;
exports.openEqfFileDialog = openEqfFileDialog;
exports.openMediaFileDialog = openMediaFileDialog;
exports.openSkinFileDialog = openSkinFileDialog;
exports.setEqBand = setEqBand;
exports.setEqToMax = setEqToMax;
exports.setEqToMid = setEqToMid;
exports.setEqToMin = setEqToMin;
exports.setPreamp = setPreamp;
exports.toggleEq = toggleEq;
exports.downloadPreset = downloadPreset;
exports.toggleDoubleSizeMode = toggleDoubleSizeMode;
exports.toggleEqualizerShadeMode = toggleEqualizerShadeMode;
exports.toggleMainWindowShadeMode = toggleMainWindowShadeMode;
exports.togglePlaylistShadeMode = togglePlaylistShadeMode;
exports.closeWindow = closeWindow;
exports.cropPlaylist = cropPlaylist;
exports.removeSelectedTracks = removeSelectedTracks;
exports.removeAllTracks = removeAllTracks;
exports.reverseList = reverseList;
exports.randomizeList = randomizeList;
exports.sortListByTitle = sortListByTitle;
exports.toggleVisualizerStyle = toggleVisualizerStyle;
exports.setPlaylistScrollPosition = setPlaylistScrollPosition;
exports.setWindowSize = setWindowSize;
exports.toggleWindow = toggleWindow;
exports.scrollNTracks = scrollNTracks;
exports.scrollPlaylistByDelta = scrollPlaylistByDelta;
exports.scrollUpFourTracks = scrollUpFourTracks;
exports.scrollDownFourTracks = scrollDownFourTracks;
exports.dragSelected = dragSelected;
exports.downloadHtmlPlaylist = downloadHtmlPlaylist;
exports.updateWindowPositions = updateWindowPositions;

var _winampEqf = __webpack_require__(217);

var _fileUtils = __webpack_require__(73);

var _skinParser = __webpack_require__(220);

var _skinParser2 = _interopRequireDefault(_skinParser);

var _constants = __webpack_require__(5);

var _selectors = __webpack_require__(7);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

var _loadQueue = __webpack_require__(235);

var _loadQueue2 = _interopRequireDefault(_loadQueue);

var _resizeUtils = __webpack_require__(111);

var _snapUtils = __webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Lower is better
const DURATION_VISIBLE_PRIORITY = 5;
const META_DATA_VISIBLE_PRIORITY = 10;
const DURATION_PRIORITY = 15;
const META_DATA_PRIORITY = 20;

const loadQueue = new _loadQueue2.default({ threads: 4 });

function playRandomTrack() {
  return (dispatch, getState) => {
    var _getState = getState(),
        _getState$playlist = _getState.playlist;

    const trackOrder = _getState$playlist.trackOrder,
          currentTrack = _getState$playlist.currentTrack;

    if (trackOrder.length === 0) {
      return;
    }
    let nextId;
    do {
      nextId = trackOrder[Math.floor(trackOrder.length * Math.random())];
    } while (nextId === currentTrack && trackOrder.length > 1);
    // TODO: Sigh... Technically, we should detect if we are looping only repeat if we are.
    // I think this would require pre-computing the "random" order of a playlist.
    dispatch({ type: _actionTypes.PLAY_TRACK, id: nextId });
  };
}

function play() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.media.status === "STOPPED" && state.playlist.curentTrack == null && state.playlist.trackOrder.length === 0) {
      dispatch(openMediaFileDialog());
    } else {
      dispatch({ type: _actionTypes.PLAY });
    }
  };
}

function pause() {
  return (dispatch, getState) => {
    const status = getState().media.status;

    dispatch({ type: status === "PLAYING" ? _actionTypes.PAUSE : _actionTypes.PLAY });
  };
}

function stop() {
  return { type: _actionTypes.STOP };
}

function nextN(n) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.media.shuffle) {
      dispatch(playRandomTrack());
      return;
    }
    const nextTrackId = (0, _selectors.nextTrack)(state, n);
    if (nextTrackId == null) {
      return;
    }
    dispatch({ type: _actionTypes.PLAY_TRACK, id: nextTrackId });
  };
}

function next() {
  return nextN(1);
}

function previous() {
  return nextN(-1);
}

function seekForward(seconds) {
  return function (dispatch, getState) {
    var _getState$media = getState().media;
    const timeElapsed = _getState$media.timeElapsed,
          length = _getState$media.length;

    const newTimeElapsed = timeElapsed + seconds;
    dispatch({
      type: _actionTypes.SEEK_TO_PERCENT_COMPLETE,
      percent: newTimeElapsed / length * 100
    });
  };
}

function seekBackward(seconds) {
  return seekForward(-seconds);
}

function close() {
  return dispatch => {
    dispatch({ type: _actionTypes.STOP });
    dispatch({ type: _actionTypes.CLOSE_WINAMP });
  };
}

function setVolume(volume) {
  return {
    type: _actionTypes.SET_VOLUME,
    volume: (0, _utils.clamp)(volume, 0, 100)
  };
}

function adjustVolume(volumeDiff) {
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    return dispatch(setVolume(currentVolume + volumeDiff));
  };
}

function scrollVolume(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    // Using pixels as percentage difference here is a bit arbirary, but... oh well.
    return dispatch(setVolume(currentVolume + e.deltaY));
  };
}

function setBalance(balance) {
  balance = (0, _utils.clamp)(balance, -100, 100);
  // The balance clips to the center
  if (Math.abs(balance) < 25) {
    balance = 0;
  }
  return {
    type: _actionTypes.SET_BALANCE,
    balance
  };
}

function toggleRepeat() {
  return { type: _actionTypes.TOGGLE_REPEAT };
}

function toggleShuffle() {
  return { type: _actionTypes.TOGGLE_SHUFFLE };
}

function setEqFromFileReference(fileReference) {
  return async dispatch => {
    const arrayBuffer = await (0, _fileUtils.genArrayBufferFromFileReference)(fileReference);
    const eqf = (0, _winampEqf.parser)(arrayBuffer);
    const preset = eqf.presets[0];

    dispatch(setPreamp((0, _utils.normalize)(preset.preamp)));
    _constants.BANDS.forEach(band => {
      dispatch(setEqBand(band, (0, _utils.normalize)(preset[`hz${band}`])));
    });
  };
}

function addTracksFromReferences(fileReferences, loadStyle, atIndex) {
  const tracks = (0, _from2.default)(fileReferences).map(file => ({
    blob: file,
    defaultName: file.name
  }));
  return loadMediaFiles(tracks, loadStyle, atIndex);
}

const SKIN_FILENAME_MATCHER = new RegExp("(wsz|zip)$", "i");
const EQF_FILENAME_MATCHER = new RegExp("eqf$", "i");
function loadFilesFromReferences(fileReferences, loadStyle = _constants.LOAD_STYLE.PLAY, atIndex = null) {
  return dispatch => {
    if (fileReferences.length < 1) {
      return;
    } else if (fileReferences.length === 1) {
      const fileReference = fileReferences[0];
      if (SKIN_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setSkinFromFileReference(fileReference));
        return;
      } else if (EQF_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setEqFromFileReference(fileReference));
        return;
      }
    }
    dispatch(addTracksFromReferences(fileReferences, loadStyle, atIndex));
  };
}

function fetchMediaDuration(url, id) {
  return (dispatch, getState) => {
    loadQueue.push(() => (0, _fileUtils.genMediaDuration)(url).then(duration => dispatch({ type: _actionTypes.SET_MEDIA_DURATION, duration, id })).catch(() => {
      // TODO: Should we update the state to indicate that we don't know the length?
    }), () => {
      const trackIsVisible = (0, _selectors.getTrackIsVisibleFunction)(getState());
      return trackIsVisible(id) ? DURATION_VISIBLE_PRIORITY : DURATION_PRIORITY;
    });
  };
}

function loadMediaFiles(tracks, loadStyle = null, atIndex = 0) {
  return dispatch => {
    if (loadStyle === _constants.LOAD_STYLE.PLAY) {
      // I'm the worst. It just so happens that in every case that we autoPlay,
      // we should also clear all tracks.
      dispatch(removeAllTracks());
    }
    tracks.forEach((track, i) => {
      const priority = i === 0 && loadStyle != null ? loadStyle : null;
      dispatch(loadMediaFile(track, priority, atIndex + i));
    });
  };
}

function loadMediaFile(track, priority = null, atIndex = 0) {
  return dispatch => {
    const id = (0, _utils.uniqueId)();
    const url = track.url,
          blob = track.blob,
          defaultName = track.defaultName,
          metaData = track.metaData,
          duration = track.duration;

    let canonicalUrl = url;
    if (canonicalUrl == null) {
      if (blob == null) {
        throw new Error("Expected track to have either a blob or a url");
      }
      canonicalUrl = URL.createObjectURL(track.blob);
    }
    dispatch({
      type: _actionTypes.ADD_TRACK_FROM_URL,
      url: canonicalUrl,
      defaultName,
      id,
      atIndex
    });
    switch (priority) {
      case _constants.LOAD_STYLE.BUFFER:
        dispatch({ type: _actionTypes.BUFFER_TRACK, id });
        break;
      case _constants.LOAD_STYLE.PLAY:
        dispatch({ type: _actionTypes.PLAY_TRACK, id });
        break;
      default:
        // If we're not going to load this right away,
        // we should set duration on our own
        if (duration != null) {
          dispatch({ type: _actionTypes.SET_MEDIA_DURATION, duration, id });
        } else {
          dispatch(fetchMediaDuration(canonicalUrl, id));
        }
    }

    if (metaData != null) {
      const artist = metaData.artist,
            title = metaData.title;

      dispatch({ type: _actionTypes.SET_MEDIA_TAGS, artist, title, id });
    } else if (blob != null) {
      // Blobs can be loaded quickly
      dispatch(fetchMediaTags(blob, id));
    } else {
      dispatch(queueFetchingMediaTags(id));
    }
  };
}

function queueFetchingMediaTags(id) {
  return (dispatch, getState) => {
    const track = (0, _selectors.getTracks)(getState())[id];
    return loadQueue.push(() => dispatch(fetchMediaTags(track.url, id)), () => {
      const trackIsVisible = (0, _selectors.getTrackIsVisibleFunction)(getState());
      return trackIsVisible(track.id) ? META_DATA_VISIBLE_PRIORITY : META_DATA_PRIORITY;
    });
  };
}

function fetchMediaTags(file, id) {
  return dispatch => {
    dispatch({ type: _actionTypes.MEDIA_TAG_REQUEST_INITIALIZED, id });
    return (0, _fileUtils.genMediaTags)(file).then(data => {
      // There's more data here, but we don't have a use for it yet:
      // https://github.com/aadsm/jsmediatags#shortcuts
      var _data$tags = data.tags;
      const artist = _data$tags.artist,
            title = _data$tags.title,
            picture = _data$tags.picture;

      let albumArtUrl = null;
      if (picture) {
        const byteArray = new Uint8Array(picture.data);
        const blob = new Blob([byteArray], { type: picture.type });
        albumArtUrl = URL.createObjectURL(blob);
      }
      dispatch({ type: _actionTypes.SET_MEDIA_TAGS, artist, title, albumArtUrl, id });
    }).catch(() => {
      dispatch({ type: _actionTypes.MEDIA_TAG_REQUEST_FAILED, id });
    });
  };
}

function setSkinFromArrayBuffer(arrayBuffer) {
  return async dispatch => {
    const skinData = await (0, _skinParser2.default)(arrayBuffer);
    dispatch({
      type: _actionTypes.SET_SKIN_DATA,
      skinImages: skinData.images,
      skinColors: skinData.colors,
      skinPlaylistStyle: skinData.playlistStyle,
      skinCursors: skinData.cursors,
      skinRegion: skinData.region,
      skinGenLetterWidths: skinData.genLetterWidths
    });
  };
}

function setSkinFromFileReference(skinFileReference) {
  return async dispatch => {
    const arrayBuffer = await (0, _fileUtils.genArrayBufferFromFileReference)(skinFileReference);
    dispatch(setSkinFromArrayBuffer(arrayBuffer));
  };
}

function setSkinFromUrl(url) {
  return async dispatch => {
    const arrayBuffer = await (0, _fileUtils.genArrayBufferFromUrl)(url);
    dispatch(setSkinFromArrayBuffer(arrayBuffer));
  };
}

// This function is private, since Winamp consumers can provide means for
// opening files via other methods. Only use the file type specific
// versions below, since they can defer to the user-defined behavior.
function _openFileDialog(accept) {
  return async dispatch => {
    const fileReferences = await (0, _fileUtils.promptForFileReferences)({ accept });
    dispatch(loadFilesFromReferences(fileReferences));
  };
}

function openEqfFileDialog() {
  return _openFileDialog(".eqf");
}

function openMediaFileDialog() {
  return _openFileDialog();
}

function openSkinFileDialog() {
  return _openFileDialog(".zip, .wsz");
}

function setEqBand(band, value) {
  return { type: _actionTypes.SET_BAND_VALUE, band, value };
}

function _setEqTo(value) {
  return dispatch => {
    (0, _keys2.default)(_constants.BANDS).forEach(key => {
      const band = _constants.BANDS[key];
      dispatch({
        type: _actionTypes.SET_BAND_VALUE,
        value,
        band
      });
    });
  };
}

function setEqToMax() {
  return _setEqTo(100);
}

function setEqToMid() {
  return _setEqTo(50);
}

function setEqToMin() {
  return _setEqTo(0);
}

function setPreamp(value) {
  return {
    type: _actionTypes.SET_BAND_VALUE,
    band: "preamp",
    value
  };
}

function toggleEq() {
  return (dispatch, getState) => {
    const type = getState().equalizer.on ? _actionTypes.SET_EQ_OFF : _actionTypes.SET_EQ_ON;
    dispatch({ type });
  };
}

function downloadPreset() {
  return (dispatch, getState) => {
    const state = getState();
    const data = (0, _selectors.getEqfData)(state);
    const arrayBuffer = (0, _winampEqf.creator)(data);
    const base64 = (0, _utils.base64FromArrayBuffer)(arrayBuffer);
    const dataURI = `data:application/zip;base64,${base64}`;
    (0, _utils.downloadURI)(dataURI, "entry.eqf");
  };
}

// Dispatch an action and, if needed rearrange the windows to preserve
// the existing edge relationship.
//
// Works by checking the edges before the action is dispatched. Then,
// after disatching, calculating what position change would be required
// to restore those relationships.
function withWindowGraphIntegrity(action) {
  return (dispatch, getState) => {
    const state = getState();
    const graph = (0, _selectors.getWindowGraph)(state);
    const originalSizes = (0, _selectors.getWindowSizes)(state);

    dispatch(action);

    const newSizes = (0, _selectors.getWindowSizes)(getState());
    const sizeDiff = {};
    for (const window of (0, _keys2.default)(newSizes)) {
      const original = originalSizes[window];
      const current = newSizes[window];
      sizeDiff[window] = {
        height: current.height - original.height,
        width: current.width - original.width
      };
    }

    const positionDiff = (0, _resizeUtils.getPositionDiff)(graph, sizeDiff);
    const windowPositions = (0, _selectors.getWindowPositions)(state);

    const newPositions = (0, _utils.objectMap)(windowPositions, (position, key) => (0, _snapUtils.applyDiff)(position, positionDiff[key]));

    dispatch(updateWindowPositions(newPositions));
  };
}

function toggleDoubleSizeMode() {
  return withWindowGraphIntegrity({ type: _actionTypes.TOGGLE_DOUBLESIZE_MODE });
}

function toggleEqualizerShadeMode() {
  return withWindowGraphIntegrity({
    type: _actionTypes.TOGGLE_WINDOW_SHADE_MODE,
    windowId: "equalizer"
  });
}

function toggleMainWindowShadeMode() {
  return withWindowGraphIntegrity({
    type: _actionTypes.TOGGLE_WINDOW_SHADE_MODE,
    windowId: "main"
  });
}

function togglePlaylistShadeMode() {
  return withWindowGraphIntegrity({
    type: _actionTypes.TOGGLE_WINDOW_SHADE_MODE,
    windowId: "playlist"
  });
}

function closeWindow(windowId) {
  return { type: _actionTypes.CLOSE_WINDOW, windowId };
}

function cropPlaylist() {
  return (dispatch, getState) => {
    const state = getState();
    if ((0, _selectors.getSelectedTrackObjects)(state).length === 0) {
      return;
    }

    var _getState2 = getState();

    const tracks = _getState2.playlist.tracks;

    dispatch({
      type: _actionTypes.REMOVE_TRACKS,
      ids: (0, _keys2.default)(tracks).filter(id => !tracks[id].selected)
    });
  };
}

function removeSelectedTracks() {
  return (dispatch, getState) => {
    var _getState3 = getState();

    const tracks = _getState3.playlist.tracks;

    dispatch({
      type: _actionTypes.REMOVE_TRACKS,
      ids: (0, _keys2.default)(tracks).filter(id => tracks[id].selected)
    });
  };
}

function removeAllTracks() {
  return { type: _actionTypes.REMOVE_ALL_TRACKS };
}

function reverseList() {
  return { type: _actionTypes.REVERSE_LIST };
}

function randomizeList() {
  return { type: _actionTypes.RANDOMIZE_LIST };
}

function sortListByTitle() {
  return (dispatch, getState) => {
    const state = getState();
    const trackOrder = (0, _utils.sort)(state.playlist.trackOrder, i => `${state.playlist.tracks[i].title}`.toLowerCase());
    return dispatch({ type: _actionTypes.SET_TRACK_ORDER, trackOrder });
  };
}

function toggleVisualizerStyle() {
  return { type: _actionTypes.TOGGLE_VISUALIZER_STYLE };
}

function setPlaylistScrollPosition(position) {
  return { type: _actionTypes.SET_PLAYLIST_SCROLL_POSITION, position };
}

function setWindowSize(windowId, size) {
  return { type: _actionTypes.WINDOW_SIZE_CHANGED, windowId, size };
}

function toggleWindow(windowId) {
  return { type: _actionTypes.TOGGLE_WINDOW, windowId };
}

function scrollNTracks(n) {
  return (dispatch, getState) => {
    const state = getState();
    const overflow = (0, _selectors.getOverflowTrackCount)(state);
    const currentOffset = (0, _selectors.getScrollOffset)(state);
    const position = overflow ? (0, _utils.clamp)((currentOffset + n) / overflow, 0, 1) : 0;
    return dispatch({
      type: _actionTypes.SET_PLAYLIST_SCROLL_POSITION,
      position: position * 100
    });
  };
}

function scrollPlaylistByDelta(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState();
    if ((0, _selectors.getOverflowTrackCount)(state)) {
      e.stopPropagation();
    }
    const totalPixelHeight = state.playlist.trackOrder.length * _constants.TRACK_HEIGHT;
    const percentDelta = e.deltaY / totalPixelHeight * 100;
    dispatch({
      type: _actionTypes.SET_PLAYLIST_SCROLL_POSITION,
      position: (0, _utils.clamp)(state.display.playlistScrollPosition + percentDelta, 0, 100)
    });
  };
}

function scrollUpFourTracks() {
  return scrollNTracks(-4);
}

function scrollDownFourTracks() {
  return scrollNTracks(4);
}

function findLastIndex(arr, cb) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
}

function dragSelected(offset) {
  return (dispatch, getState) => {
    var _getState4 = getState(),
        _getState4$playlist = _getState4.playlist;

    const trackOrder = _getState4$playlist.trackOrder,
          tracks = _getState4$playlist.tracks;

    const firstSelected = trackOrder.findIndex(trackId => tracks[trackId] && tracks[trackId].selected);
    if (firstSelected === -1) {
      return;
    }
    const lastSelected = findLastIndex(trackOrder, trackId => tracks[trackId] && tracks[trackId].selected);
    if (lastSelected === -1) {
      throw new Error("We found a first selected, but not a last selected.");
    }
    // Ensure we don't try to drag off either end.
    const min = -firstSelected;
    const max = trackOrder.length - 1 - lastSelected;
    const normalizedOffset = (0, _utils.clamp)(offset, min, max);
    if (normalizedOffset !== 0) {
      dispatch({ type: _actionTypes.DRAG_SELECTED, offset: normalizedOffset });
    }
  };
}

function downloadHtmlPlaylist() {
  return (dispatch, getState) => {
    const uri = (0, _selectors.getPlaylistURL)(getState());
    (0, _utils.downloadURI)(uri, "Winamp Playlist.html");
  };
}

function updateWindowPositions(positions) {
  return { type: _actionTypes.UPDATE_WINDOW_POSITIONS, positions };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const ADD_TRACK_FROM_URL = exports.ADD_TRACK_FROM_URL = "ADD_TRACK_FROM_URL";
const CLOSE_WINAMP = exports.CLOSE_WINAMP = "CLOSE_WINAMP";
const MINIMIZE_WINAMP = exports.MINIMIZE_WINAMP = "MINIMIZE_WINAMP";
const IS_PLAYING = exports.IS_PLAYING = "IS_PLAYING";
const IS_STOPPED = exports.IS_STOPPED = "IS_STOPPED";
const PAUSE = exports.PAUSE = "PAUSE";
const PLAY = exports.PLAY = "PLAY";
const SEEK_TO_PERCENT_COMPLETE = exports.SEEK_TO_PERCENT_COMPLETE = "SEEK_TO_PERCENT_COMPLETE";
const SET_BALANCE = exports.SET_BALANCE = "SET_BALANCE";
const SET_BAND_VALUE = exports.SET_BAND_VALUE = "SET_BAND_VALUE";
const SET_FOCUS = exports.SET_FOCUS = "SET_FOCUS";
const SET_BAND_FOCUS = exports.SET_BAND_FOCUS = "SET_BAND_FOCUS";
const SET_FOCUSED_WINDOW = exports.SET_FOCUSED_WINDOW = "SET_FOCUSED_WINDOW";
const SET_MEDIA = exports.SET_MEDIA = "SET_MEDIA";
const SET_SCRUB_POSITION = exports.SET_SCRUB_POSITION = "SET_SCRUB_POSITION";
const SET_SKIN_DATA = exports.SET_SKIN_DATA = "SET_SKIN_DATA";
const SET_VOLUME = exports.SET_VOLUME = "SET_VOLUME";
const START_WORKING = exports.START_WORKING = "START_WORKING";
const STEP_MARQUEE = exports.STEP_MARQUEE = "STEP_MARQUEE";
const STOP = exports.STOP = "STOP";
const STOP_WORKING = exports.STOP_WORKING = "STOP_WORKING";
const TOGGLE_DOUBLESIZE_MODE = exports.TOGGLE_DOUBLESIZE_MODE = "TOGGLE_DOUBLESIZE_MODE";
const SET_EQ_AUTO = exports.SET_EQ_AUTO = "SET_EQ_AUTO";
const SET_EQ_ON = exports.SET_EQ_ON = "SET_EQ_ON";
const SET_EQ_OFF = exports.SET_EQ_OFF = "SET_EQ_OFF";
const TOGGLE_LLAMA_MODE = exports.TOGGLE_LLAMA_MODE = "TOGGLE_LLAMA_MODE";
const TOGGLE_REPEAT = exports.TOGGLE_REPEAT = "TOGGLE_REPEAT";
const TOGGLE_SHUFFLE = exports.TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
const TOGGLE_TIME_MODE = exports.TOGGLE_TIME_MODE = "TOGGLE_TIME_MODE";
const TOGGLE_VISUALIZER_STYLE = exports.TOGGLE_VISUALIZER_STYLE = "TOGGLE_VISUALIZER_STYLE";
const UNSET_FOCUS = exports.UNSET_FOCUS = "UNSET_FOCUS";
const UPDATE_TIME_ELAPSED = exports.UPDATE_TIME_ELAPSED = "UPDATE_TIME_ELAPSED";
const SET_USER_MESSAGE = exports.SET_USER_MESSAGE = "SET_USER_MESSAGE";
const UNSET_USER_MESSAGE = exports.UNSET_USER_MESSAGE = "UNSET_USER_MESSAGE";
const SET_PLAYLIST_SCROLL_POSITION = exports.SET_PLAYLIST_SCROLL_POSITION = "SET_PLAYLIST_SCROLL_POSITION";
const CLICKED_TRACK = exports.CLICKED_TRACK = "CLICKED_TRACK";
const CTRL_CLICKED_TRACK = exports.CTRL_CLICKED_TRACK = "CTRL_CLICKED_TRACK";
const SHIFT_CLICKED_TRACK = exports.SHIFT_CLICKED_TRACK = "SHIFT_CLICKED_TRACK";
const SELECT_ALL = exports.SELECT_ALL = "SELECT_ALL";
const SELECT_ZERO = exports.SELECT_ZERO = "SELECT_ZERO";
const INVERT_SELECTION = exports.INVERT_SELECTION = "INVERT_SELECTION";
const REMOVE_ALL_TRACKS = exports.REMOVE_ALL_TRACKS = "REMOVE_ALL_TRACKS";
const CROP_TRACKS = exports.CROP_TRACKS = "CROP_TRACKS";
const FILE_INFO = exports.FILE_INFO = "FILE_INFO";
const REMOVE_TRACKS = exports.REMOVE_TRACKS = "REMOVE_TRACKS";
const SET_AVAILABLE_SKINS = exports.SET_AVAILABLE_SKINS = "SET_AVAILABLE_SKINS";
const REVERSE_LIST = exports.REVERSE_LIST = "REVERSE_LIST";
const RANDOMIZE_LIST = exports.RANDOMIZE_LIST = "RANDOMIZE_LIST";
const SET_TRACK_ORDER = exports.SET_TRACK_ORDER = "SET_TRACK_ORDER";
const PLAY_TRACK = exports.PLAY_TRACK = "PLAY_TRACK";
const BUFFER_TRACK = exports.BUFFER_TRACK = "BUFFER_TRACK";
const DRAG_SELECTED = exports.DRAG_SELECTED = "DRAG_SELECTED";
const SET_MEDIA_TAGS = exports.SET_MEDIA_TAGS = "SET_MEDIA_TAGS";
const SET_MEDIA_DURATION = exports.SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
const TOGGLE_WINDOW = exports.TOGGLE_WINDOW = "TOGGLE_WINDOW";
const ADD_GEN_WINDOW = exports.ADD_GEN_WINDOW = "ADD_GEN_WINDOW";
const CLOSE_WINDOW = exports.CLOSE_WINDOW = "CLOSE_WINDOW";
const MEDIA_TAG_REQUEST_INITIALIZED = exports.MEDIA_TAG_REQUEST_INITIALIZED = "MEDIA_TAG_REQUEST_INITIALIZED";
const MEDIA_TAG_REQUEST_FAILED = exports.MEDIA_TAG_REQUEST_FAILED = "MEDIA_TAG_REQUEST_FAILED";
const NETWORK_CONNECTED = exports.NETWORK_CONNECTED = "NETWORK_CONNECTED";
const NETWORK_DISCONNECTED = exports.NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED";
const UPDATE_WINDOW_POSITIONS = exports.UPDATE_WINDOW_POSITIONS = "UPDATE_WINDOW_POSITIONS";
const CHANNEL_COUNT_CHANGED = exports.CHANNEL_COUNT_CHANGED = "CHANNEL_COUNT_CHANGED";
const WINDOW_SIZE_CHANGED = exports.WINDOW_SIZE_CHANGED = "WINDOW_SIZE_CHANGED";
const TOGGLE_WINDOW_SHADE_MODE = exports.TOGGLE_WINDOW_SHADE_MODE = "TOGGLE_WINDOW_SHADE_MODE";
const LOADED = exports.LOADED = "LOADED";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(50);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const BANDS = exports.BANDS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];

const WINDOWS = exports.WINDOWS = {
  MAIN: "MAIN",
  PLAYLIST: "PLAYLIST",
  EQUALIZER: "EQUALIZER"
};

const LOAD_STYLE = exports.LOAD_STYLE = {
  BUFFER: "BUFFER",
  PLAY: "PLAY"
};

const MEDIA_TAG_REQUEST_STATUS = exports.MEDIA_TAG_REQUEST_STATUS = {
  INITIALIZED: "INITIALIZED",
  FAILED: "FAILED",
  COMPLETE: "COMPLETE",
  NOT_REQUESTED: "NOT_REQUESTED"
};

const UTF8_ELLIPSIS = exports.UTF8_ELLIPSIS = "\u2026";
const CHARACTER_WIDTH = exports.CHARACTER_WIDTH = 5;
const WINDOW_RESIZE_SEGMENT_WIDTH = exports.WINDOW_RESIZE_SEGMENT_WIDTH = 25;
const WINDOW_RESIZE_SEGMENT_HEIGHT = exports.WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
const WINDOW_HEIGHT = exports.WINDOW_HEIGHT = 116;
const WINDOW_WIDTH = exports.WINDOW_WIDTH = 275;
const TRACK_HEIGHT = exports.TRACK_HEIGHT = 13;
const LETTERS = exports.LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const DEFAULT_VIS_COLORS = exports.DEFAULT_VIS_COLORS = ["rgb(0,0,0)", "rgb(24,33,41)", "rgb(239,49,16)", "rgb(206,41,16)", "rgb(214,90,0)", "rgb(214,102,0)", "rgb(214,115,0)", "rgb(198,123,8)", "rgb(222,165,24)", "rgb(214,181,33)", "rgb(189,222,41)", "rgb(148,222,33)", "rgb(41,206,16)", "rgb(50,190,16)", "rgb(57,181,16)", "rgb(49,156,8)", "rgb(41,148,0)", "rgb(24,132,8)", "rgb(255,255,255)", "rgb(214,214,222)", "rgb(181,189,189)", "rgb(160,170,175)", "rgb(148,156,165)", "rgb(150,150,150)"];

const DEFAULT_PLAYLIST_STYLE = exports.DEFAULT_PLAYLIST_STYLE = {
  normal: "#00FF00",
  current: "#FFFFFF",
  normalbg: "#000000",
  selectedbg: "#0000FF",
  font: "Arial"
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSkinPlaylistStyle = exports.getWindowGraph = exports.getWindowsInfo = exports.getWindowSizes = exports.getGenWindows = exports.getPlaylistURL = exports.getNumberOfTracks = exports.getMediaText = exports.getMinimalMediaText = exports.getCurrentTrackDisplayName = exports.getTrackDisplayName = exports.getDuration = exports.getPlaylist = exports.getVisibleTracks = exports.getTrackIsVisibleFunction = exports.getVisibleTrackIds = exports.getScrollOffset = exports.getPlaylistScrollPosition = exports.getOverflowTrackCount = exports.getNumberOfVisibleTracks = exports.nextTrack = exports.getCurrentTrackId = exports.getCurrentTrackNumber = exports.getCurrentTrackIndex = exports.getRunningTimeMessage = exports.getSelectedTrackObjects = exports.getOrderedTracks = exports.getTrackCount = exports.getTracks = exports.getEqfData = undefined;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = __webpack_require__(32);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _values = __webpack_require__(228);

var _values2 = _interopRequireDefault(_values);

exports.getWindowPositions = getWindowPositions;
exports.getWindowSize = getWindowSize;
exports.getWindowOpen = getWindowOpen;
exports.getWindowShade = getWindowShade;
exports.getDoubled = getDoubled;
exports.getWindowPixelSize = getWindowPixelSize;

var _reselect = __webpack_require__(231);

var _utils = __webpack_require__(9);

var _constants = __webpack_require__(5);

var _playlistHtml = __webpack_require__(232);

var _playlist = __webpack_require__(103);

var fromPlaylist = _interopRequireWildcard(_playlist);

var _resizeUtils = __webpack_require__(111);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getEqfData = exports.getEqfData = state => {
  const sliders = state.equalizer.sliders;

  const preset = {
    name: "Entry1",
    preamp: (0, _utils.denormalize)(sliders.preamp)
  };
  _constants.BANDS.forEach(band => {
    preset[`hz${band}`] = (0, _utils.denormalize)(sliders[band]);
  });
  const eqfData = {
    presets: [preset],
    type: "Winamp EQ library file v1.1"
  };
  return eqfData;
};

const getTracks = exports.getTracks = state => state.playlist.tracks;
const getTrackOrder = state => state.playlist.trackOrder;

const getTrackCount = exports.getTrackCount = (0, _reselect.createSelector)(getTrackOrder, trackOrder => trackOrder.length);

const getOrderedTracks = exports.getOrderedTracks = (0, _reselect.createSelector)(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.filter(id => tracks[id]));

const getOrderedTrackObjects = (0, _reselect.createSelector)(getTracks, getOrderedTracks, (tracks, trackOrder) => trackOrder.map(id => tracks[id]));

const getSelectedTrackObjects = exports.getSelectedTrackObjects = (0, _reselect.createSelector)(getOrderedTrackObjects, tracks => tracks.filter(track => track.selected));

// If a duration is `null`, it counts as zero, which seems fine enough.
const runningTimeFromTracks = tracks => tracks.reduce((time, track) => time + Number(track.duration), 0);

const getTotalRunningTime = (0, _reselect.createSelector)(getOrderedTrackObjects, runningTimeFromTracks);

const getSelectedRunningTime = (0, _reselect.createSelector)(getSelectedTrackObjects, runningTimeFromTracks);

// Note: We should append "+" to these values if some of the tracks are of unknown time.
const getRunningTimeMessage = exports.getRunningTimeMessage = (0, _reselect.createSelector)(getTotalRunningTime, getSelectedRunningTime, (totalRunningTime, selectedRunningTime) => `${(0, _utils.getTimeStr)(selectedRunningTime)}/${(0, _utils.getTimeStr)(totalRunningTime)}`);

// TODO: use slectors to get memoization
const getCurrentTrackIndex = exports.getCurrentTrackIndex = state => state.playlist.trackOrder.indexOf(state.playlist.currentTrack);

const getCurrentTrackNumber = exports.getCurrentTrackNumber = (0, _reselect.createSelector)(getCurrentTrackIndex, currentTrackIndex => currentTrackIndex + 1);

const getCurrentTrackId = exports.getCurrentTrackId = state => state.playlist.currentTrack;

const nextTrack = exports.nextTrack = (state, n = 1) => {
  const trackOrder = state.playlist.trackOrder,
        repeat = state.media.repeat;

  const trackCount = getTrackCount(state);
  if (trackCount === 0) {
    return null;
  }

  const currentIndex = getCurrentTrackIndex(state);

  let nextIndex = currentIndex + n;
  if (repeat) {
    nextIndex = nextIndex % trackCount;
    if (nextIndex < 0) {
      // Handle wrapping around backwards
      nextIndex += trackCount;
    }
    return trackOrder[nextIndex];
  }

  if (currentIndex === trackCount - 1 && n > 0) {
    return null;
  } else if (currentIndex === 0 && n < 0) {
    return null;
  }

  nextIndex = (0, _utils.clamp)(nextIndex, 0, trackCount - 1);
  return trackOrder[nextIndex];
};

const BASE_WINDOW_HEIGHT = 58;
const getNumberOfVisibleTracks = exports.getNumberOfVisibleTracks = state => {
  const playlistSize = getWindowSize(state, "playlist");
  return Math.floor((BASE_WINDOW_HEIGHT + _constants.WINDOW_RESIZE_SEGMENT_HEIGHT * playlistSize[1]) / _constants.TRACK_HEIGHT);
};

const getOverflowTrackCount = exports.getOverflowTrackCount = (0, _reselect.createSelector)(getTrackCount, getNumberOfVisibleTracks, (trackCount, numberOfVisibleTracks) => Math.max(0, trackCount - numberOfVisibleTracks));

const _getPlaylistScrollPosition = state => state.display.playlistScrollPosition;

const getPlaylistScrollPosition = exports.getPlaylistScrollPosition = (0, _reselect.createSelector)(getOverflowTrackCount, _getPlaylistScrollPosition, (overflowTrackCount, playlistScrollPosition) => {
  if (overflowTrackCount === 0) {
    return 0;
  }
  return Math.round(Math.round(overflowTrackCount * playlistScrollPosition / 100) / overflowTrackCount * 100);
});

const getScrollOffset = exports.getScrollOffset = (0, _reselect.createSelector)(_getPlaylistScrollPosition, getTrackCount, getNumberOfVisibleTracks, (playlistScrollPosition, trackCount, numberOfVisibleTracks) => {
  const overflow = Math.max(0, trackCount - numberOfVisibleTracks);
  return (0, _utils.percentToIndex)(playlistScrollPosition / 100, overflow + 1);
});

const getVisibleTrackIds = exports.getVisibleTrackIds = (0, _reselect.createSelector)(getScrollOffset, getTrackOrder, getNumberOfVisibleTracks, (offset, trackOrder, numberOfVisibleTracks) => trackOrder.slice(offset, offset + numberOfVisibleTracks));

const getTrackIsVisibleFunction = exports.getTrackIsVisibleFunction = (0, _reselect.createSelector)(getVisibleTrackIds, visibleTrackIds => {
  return id => visibleTrackIds.includes(id);
});

const getVisibleTracks = exports.getVisibleTracks = (0, _reselect.createSelector)(getVisibleTrackIds, getTracks, (visibleTrackIds, tracks) => visibleTrackIds.map(id => tracks[id]));

const getPlaylist = exports.getPlaylist = state => state.playlist;

const getDuration = exports.getDuration = state => {
  const currentTrack = state.playlist.tracks[state.playlist.currentTrack];
  return currentTrack && currentTrack.duration;
};

const getTrackDisplayName = exports.getTrackDisplayName = (state, trackId) => fromPlaylist.getTrackDisplayName(getPlaylist(state), trackId);

const getCurrentTrackDisplayName = exports.getCurrentTrackDisplayName = state => {
  const id = getCurrentTrackId(state);
  return getTrackDisplayName(state, id);
};

const getMinimalMediaText = exports.getMinimalMediaText = (0, _reselect.createSelector)(getCurrentTrackNumber, getCurrentTrackDisplayName, (trackNumber, name) => name == null ? null : `${trackNumber}. ${name}`);

const getMediaText = exports.getMediaText = (0, _reselect.createSelector)(getMinimalMediaText, getDuration, (minimalMediaText, duration) => minimalMediaText == null ? null : // TODO: Maybe the `  ***  ` should actually be added by the marquee
`${minimalMediaText} (${(0, _utils.getTimeStr)(duration)})  ***  `);

const getNumberOfTracks = exports.getNumberOfTracks = state => getTrackOrder(state).length;
const getPlaylistDuration = (0, _reselect.createSelector)(getTracks, tracks => (0, _values2.default)(tracks).reduce((total, track) => total + track.duration, 0));

// TODO: Move to action creator
const getPlaylistURL = exports.getPlaylistURL = (0, _reselect.createSelector)(state => state, getNumberOfTracks, getPlaylistDuration, getTrackOrder, getTracks, (state, numberOfTracks, playlistDuration, trackOrder, tracks) => (0, _playlistHtml.createPlaylistURL)({
  numberOfTracks,
  averageTrackLength: (0, _utils.getTimeStr)(playlistDuration / numberOfTracks),
  // TODO: Handle hours
  playlistLengthMinutes: Math.floor(playlistDuration / 60),
  playlistLengthSeconds: Math.floor(playlistDuration % 60),
  tracks: trackOrder.map((id, i) => `${i + 1}. ${getTrackDisplayName(state, id)} (${(0, _utils.getTimeStr)(tracks[id].duration)})`)
}));

function getWindowPositions(state) {
  return state.windows.positions;
}

const WINDOW_HEIGHT = 116;
const SHADE_WINDOW_HEIGHT = 14;

function getWPixelSize(w, doubled) {
  var _w$size = (0, _slicedToArray3.default)(w.size, 2);

  const width = _w$size[0],
        height = _w$size[1];

  const doubledMultiplier = doubled && w.canDouble ? 2 : 1;
  const pix = {
    height: WINDOW_HEIGHT + height * _constants.WINDOW_RESIZE_SEGMENT_HEIGHT,
    width: _constants.WINDOW_WIDTH + width * _constants.WINDOW_RESIZE_SEGMENT_WIDTH
  };
  return {
    height: (w.shade ? SHADE_WINDOW_HEIGHT : pix.height) * doubledMultiplier,
    width: pix.width * doubledMultiplier
  };
}

function getWindowSize(state, windowId) {
  return state.windows.genWindows[windowId].size;
}

function getWindowOpen(state, windowId) {
  return state.windows.genWindows[windowId].open;
}

function getWindowShade(state, windowId) {
  return state.windows.genWindows[windowId].shade;
}

const getGenWindows = exports.getGenWindows = state => {
  return state.windows.genWindows;
};

function getDoubled(state) {
  return state.display.doubled;
}

const getWindowSizes = exports.getWindowSizes = (0, _reselect.createSelector)(getGenWindows, getDoubled, (windows, doubled) => {
  return (0, _utils.objectMap)(windows, w => getWPixelSize(w, doubled));
});

function getWindowPixelSize(state, windowId) {
  // Rather than compute it directly, we go via `getWindowSizes`
  // to take advantage of caching.
  return getWindowSizes(state)[windowId];
}

const getWindowsInfo = exports.getWindowsInfo = (0, _reselect.createSelector)(getWindowSizes, getWindowPositions, (sizes, positions) => (0, _keys2.default)(sizes).map(key => (0, _extends3.default)({ key }, sizes[key], positions[key])));

const getWindowGraph = exports.getWindowGraph = (0, _reselect.createSelector)(getWindowsInfo, _resizeUtils.generateGraph);

const getSkinPlaylistStyle = exports.getSkinPlaylistStyle = state => {
  return state.display.skinPlaylistStyle || {
    normal: "#00FF00",
    current: "#FFFFFF",
    normalbg: "#000000",
    selectedbg: "#0000C6",
    font: "Arial"
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectFilter = exports.spliceIn = exports.moveSelected = exports.sort = exports.shuffle = exports.arraysAreEqual = exports.segment = exports.merge = exports.denormalize = exports.normalize = exports.percentToIndex = exports.percentToRange = exports.toPercent = exports.base64FromArrayBuffer = exports.clamp = exports.parseIni = exports.parseViscolors = exports.getFileExtension = exports.getTimeStr = exports.getTimeObj = undefined;

var _assign = __webpack_require__(50);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

exports.downloadURI = downloadURI;
exports.debounce = debounce;
exports.uniqueId = uniqueId;
exports.objectForEach = objectForEach;
exports.objectMap = objectMap;

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTimeObj = exports.getTimeObj = time => {
  if (time == null) {
    // If we clean up `<MiniTime />` we don't need to do this any more.
    return {
      minutesFirstDigit: " ",
      minutesSecondDigit: " ",
      secondsFirstDigit: " ",
      secondsSecondDigit: " "
    };
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const digits = time == null ? [" ", " ", " ", " "] : [Math.floor(minutes / 10), Math.floor(minutes % 10), Math.floor(seconds / 10), Math.floor(seconds % 10)];

  const minutesFirstDigit = digits[0],
        minutesSecondDigit = digits[1],
        secondsFirstDigit = digits[2],
        secondsSecondDigit = digits[3];


  return {
    minutesFirstDigit,
    minutesSecondDigit,
    secondsFirstDigit,
    secondsSecondDigit
  };
};

const getTimeStr = exports.getTimeStr = (time, truncate = true) => {
  if (time == null) {
    return "";
  }

  var _getTimeObj = getTimeObj(time);

  const minutesFirstDigit = _getTimeObj.minutesFirstDigit,
        minutesSecondDigit = _getTimeObj.minutesSecondDigit,
        secondsFirstDigit = _getTimeObj.secondsFirstDigit,
        secondsSecondDigit = _getTimeObj.secondsSecondDigit;


  return [truncate ? minutesFirstDigit || "" : minutesFirstDigit, minutesSecondDigit, ":", secondsFirstDigit, secondsSecondDigit].join("");
};

const getFileExtension = exports.getFileExtension = fileName => {
  const matches = /\.([a-z]{3,4})$/i.exec(fileName);
  return matches ? matches[1].toLowerCase() : null;
};

const parseViscolors = exports.parseViscolors = text => {
  const entries = text.split("\n");
  const regex = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;
  const colors = [];
  // changed to a hard number to deal with empty lines at the end...
  // plus it's only meant to be an exact quantity of numbers anyway.
  // - @PAEz
  for (let i = 0; i < 24; i++) {
    const matches = regex.exec(entries[i]);
    colors[i] = matches ? `rgb(${matches.slice(1, 4).join(",")})` : _constants.DEFAULT_VIS_COLORS[i];
  }
  return colors;
};

const SECTION_REGEX = /^\s*\[(.+?)\]\s*$/;
const PROPERTY_REGEX = /^\s*([^;].*)\s*=\s*(.*)\s*$/;

const parseIni = exports.parseIni = text => {
  let section, match;
  return text.split(/[\r\n]+/g).reduce((data, line) => {
    if ((match = line.match(PROPERTY_REGEX)) && section != null) {
      const value = match[2].replace(/(^")|("$)|(^')|('$)/gi, "");
      data[section][match[1].trim().toLowerCase()] = value;
    } else if (match = line.match(SECTION_REGEX)) {
      section = match[1].trim().toLowerCase();
      data[section] = {};
    }
    return data;
  }, {});
};

const clamp = exports.clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const base64FromArrayBuffer = exports.base64FromArrayBuffer = arrayBuffer => {
  const dataView = new Uint8Array(arrayBuffer);
  return window.btoa(String.fromCharCode(...dataView));
};

// https://stackoverflow.com/a/15832662/1263117
function downloadURI(uri, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}

const toPercent = exports.toPercent = (min, max, value) => (value - min) / (max - min);

const percentToRange = exports.percentToRange = (percent, min, max) => min + Math.round(percent * (max - min));

const percentToIndex = exports.percentToIndex = (percent, length) => percentToRange(percent, 0, length - 1);

const rebound = (oldMin, oldMax, newMin, newMax) => oldValue => percentToRange(toPercent(oldMin, oldMax, oldValue), newMin, newMax);

// Convert a .eqf value to a 1-100
const normalize = exports.normalize = rebound(1, 64, 1, 100);

// Convert a 0-100 to an .eqf value
const denormalize = exports.denormalize = rebound(1, 100, 1, 64);

// Merge a `source` object to a `target` recursively
const merge = exports.merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of (0, _keys2.default)(source)) {
    if (source[key] instanceof Object) (0, _assign2.default)(source[key], merge(target[key], source[key]));
  }

  // Join `target` and modified `source`
  (0, _assign2.default)(target || {}, source);
  return target;
};

// Maps a value in a range (defined my min/max) to a value in an array (options).
const segment = exports.segment = (min, max, value, newValues) => {
  const ratio = toPercent(min, max, value);
  /*
  | 0 | 1 | 2 |
  0   1   2   3
  */
  return newValues[percentToIndex(ratio, newValues.length)];
};

const arraysAreEqual = exports.arraysAreEqual = (a, b) => a.length === b.length && a.every((value, i) => value === b[i]);

// https://bost.ocks.org/mike/shuffle/
// Shuffle an array in O(n)
const shuffle = exports.shuffle = array => {
  const sorted = [...array];
  let m = sorted.length;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    const val = sorted[m];
    sorted[m] = sorted[i];
    sorted[i] = val;
  }

  return sorted;
};

const sort = exports.sort = (array, iteratee) => [...array].sort((a, b) => {
  const aKey = iteratee(a);
  const bKey = iteratee(b);
  if (aKey < bKey) {
    return -1;
  } else if (aKey > bKey) {
    return 1;
  }
  return 0;
});

const moveSelected = exports.moveSelected = (arr, isSelected, offset) => {
  const newArr = new Array(arr.length);
  let next = 0;
  for (let i = 0; i < newArr.length; i++) {
    const from = i - offset;
    // Is a value supposed to move here?
    if (from >= 0 && from < arr.length && isSelected(from)) {
      newArr[i] = arr[from];
    } else {
      while (next < arr.length && isSelected(next)) {
        next++;
      }
      newArr[i] = arr[next];
      next++;
    }
  }
  return newArr;
};

const spliceIn = exports.spliceIn = (original, start, newValues) => {
  const newArr = [...original];
  newArr.splice(start, 0, ...newValues);
  return newArr;
};

function debounce(func, delay) {
  let token;
  return function (...args) {
    if (token != null) {
      clearTimeout(token);
    }
    token = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let counter = 0;
function uniqueId() {
  return counter++;
}

function objectForEach(obj, cb) {
  (0, _keys2.default)(obj).forEach(key => cb(obj[key], key));
}

function objectMap(obj, cb) {
  const modified = {};
  (0, _keys2.default)(obj).forEach(key => modified[key] = cb(obj[key], key));
  return modified;
}

const objectFilter = exports.objectFilter = (obj, predicate) =>
// TODO: Could return the original reference if no values change
(0, _keys2.default)(obj).reduce((newObj, key) => {
  if (predicate(obj[key], key)) {
    newObj[key] = obj[key];
  }
  return newObj;
}, {});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(8);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(57)('wks');
var uid = __webpack_require__(44);
var Symbol = __webpack_require__(13).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(155)();
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(83);
var toPrimitive = __webpack_require__(52);
var dP = Object.defineProperty;

exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(203), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(33);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(25)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = exports.Node = exports.LinkNode = exports.Parent = exports.Hr = undefined;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(238);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Portal extends _react2.default.Component {
  constructor(props) {
    super(props);
    this._node = document.createElement("div");
    document.body.appendChild(this._node);
  }

  componentWillUnmount() {
    document.body.removeChild(this._node);
  }

  render() {
    const style = {
      position: "absolute",
      top: this.props.top,
      left: this.props.left
    };
    return (0, _reactDom.createPortal)(_react2.default.createElement(
      "div",
      { style: style },
      this.props.children
    ), this._node);
  }
}

const Hr = exports.Hr = () => _react2.default.createElement(
  "li",
  { className: "hr" },
  _react2.default.createElement("hr", null)
);

const Parent = exports.Parent = ({ children, label }) => _react2.default.createElement(
  "li",
  { className: "parent" },
  _react2.default.createElement(
    "ul",
    null,
    children
  ),
  label
);

const LinkNode = exports.LinkNode = props => _react2.default.createElement(
  "li",
  null,
  _react2.default.createElement(
    "a",
    props,
    props.label
  )
);

LinkNode.propTypes = {
  label: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string.isRequired
};

const Node = props => {
  const label = props.label,
        checked = props.checked;
  var _props$className = props.className;
  const className = _props$className === undefined ? "" : _props$className,
        passThroughProps = (0, _objectWithoutProperties3.default)(props, ["label", "checked", "className"]);

  return _react2.default.createElement(
    "li",
    (0, _extends3.default)({ className: (0, _classnames2.default)(className, { checked }) }, passThroughProps),
    label
  );
};

exports.Node = Node;
Node.propTypes = {
  label: _propTypes2.default.string.isRequired
};

class ContextMenu extends _react2.default.Component {
  render() {
    var _props = this.props;
    const children = _props.children,
          offsetTop = _props.offsetTop,
          offsetLeft = _props.offsetLeft,
          top = _props.top,
          bottom = _props.bottom,
          selected = _props.selected;

    return selected && _react2.default.createElement(
      Portal,
      { top: offsetTop, left: offsetLeft },
      _react2.default.createElement(
        "ul",
        { id: "context-menu", className: (0, _classnames2.default)({ top, bottom }) },
        children
      )
    );
  }
}
exports.ContextMenu = ContextMenu;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(34);
module.exports = __webpack_require__(19) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(240);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53);
var defined = __webpack_require__(54);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(84);
var enumBugKeys = __webpack_require__(58);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(135)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(62)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(147);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(221);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(224);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(54);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(26);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
var global = __webpack_require__(13);
var hide = __webpack_require__(21);
var Iterators = __webpack_require__(30);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var call = __webpack_require__(88);
var isArrayIter = __webpack_require__(89);
var anObject = __webpack_require__(16);
var toLength = __webpack_require__(43);
var getIterFn = __webpack_require__(64);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Character = __webpack_require__(117);

var _Character2 = _interopRequireDefault(_Character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CharacterString = props => {
  const text = `${props.children}` || "";
  const chars = text.split("");
  return _react2.default.createElement(
    "div",
    props,
    chars.map((character, index) => _react2.default.createElement(
      _Character2.default,
      { key: index + character },
      character
    ))
  );
};

CharacterString.propsTypes = {
  children: _propTypes2.default.string
};

exports.default = CharacterString;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let cursorX;
let cursorY;
window.document.addEventListener("mousemove", e => {
  cursorX = e.pageX;
  cursorY = e.pageY;
});

// We implement hover ourselves, because we hate ourselves and https://stackoverflow.com/a/13259049/1263117
class Entry extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  componentDidMount() {
    const domRect = this.node.getBoundingClientRect();
    this.setState({
      hover: cursorX >= domRect.left && cursorX <= domRect.right && cursorY >= domRect.top && cursorY <= domRect.bottom
    });
  }

  render() {
    return _react2.default.createElement(
      "li",
      {
        ref: node => this.node = node,
        onMouseEnter: () => this.setState({ hover: true }),
        onMouseLeave: () => this.setState({ hover: false }),
        className: (0, _classnames2.default)({ hover: this.state.hover })
      },
      this.props.children
    );
  }
}

class PlaylistMenu extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    const target = e.target;
    const selected = this.state.selected;

    if (selected) {
      this.setState({ selected: false });
      return;
    }

    const handleClickOut = ee => {
      // If the click is _not_ inside the menu.
      if (!target.contains(ee.target)) {
        // If we've clicked on a Context Menu spawed inside this menu, it will
        // register as an external click. However, hiding the menu will remove
        // the Context Menu from the DOM. Therefore, we wait until the next
        // event loop to actually hide ourselves.
        setTimeout(() => {
          // Close the menu
          this.setState({ selected: false });
        }, 0);
        window.document.removeEventListener("click", handleClickOut, {
          capture: true
        });
      }
    };
    window.document.addEventListener("click", handleClickOut, {
      capture: true
    });

    this.setState({ selected: true });
  }

  render() {
    return _react2.default.createElement(
      "div",
      {
        id: this.props.id,
        className: (0, _classnames2.default)("playlist-menu", {
          selected: this.state.selected
        }),
        onClick: this._handleClick
      },
      _react2.default.createElement("div", { className: "bar" }),
      this.state.selected && _react2.default.createElement(
        "ul",
        null,
        _react2.default.Children.map(this.props.children, (child, i) => _react2.default.createElement(
          Entry,
          { key: i },
          child
        ))
      )
    );
  }
}
exports.default = PlaylistMenu;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(55);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(137);
var enumBugKeys = __webpack_require__(58);
var IE_PROTO = __webpack_require__(56)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(51)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(86).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(35);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(163);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_0_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Winamp has a strange behavior for the buttons at the top of the main window.
// It shows through to the main background sprite until the first time that it's
// clicked, and then it shows the dedicated undepressed sprite thereafter.
// This component is an abstraction that tracks if a div has ever been clicked.
// Look in `skinSelectors` for CSS selectors that look like `#some-id.clicked`
// for examples of this functionality in use.
class ClickedDiv extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    return _react2.default.createElement("div", (0, _extends3.default)({}, this.props, {
      className: (0, _classnames2.default)(this.props.className, this.state),
      onMouseDown: e => {
        if (!this.state.clicked) {
          this.setState({ clicked: true });
        }
        if (this.props.onMouseDown) {
          this.props.onMouseDown(e);
        }
      }
    }));
  }
}
exports.default = ClickedDiv;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(13).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(57)('keys');
var uid = __webpack_require__(44);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports) {



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(45);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(85);
var hide = __webpack_require__(21);
var has = __webpack_require__(26);
var Iterators = __webpack_require__(30);
var $iterCreate = __webpack_require__(136);
var setToStringTag = __webpack_require__(38);
var getPrototypeOf = __webpack_require__(138);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(33);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(21);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(183), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(44)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(26);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(25)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(60);

var _promise2 = _interopRequireDefault(_promise);

exports.genMediaTags = genMediaTags;
exports.genMediaDuration = genMediaDuration;
exports.genArrayBufferFromFileReference = genArrayBufferFromFileReference;
exports.genArrayBufferFromUrl = genArrayBufferFromUrl;
exports.promptForFileReferences = promptForFileReferences;
exports.filenameFromUrl = filenameFromUrl;

var _invariant = __webpack_require__(106);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function genMediaTags(file) {
  (0, _invariant2.default)(file != null, "Attempted to get the tags of media file without passing a file");
  // Workaround https://github.com/aadsm/jsmediatags/issues/83
  if (typeof file === "string" && !/^[a-z]+:\/\//i.test(file)) {
    file = `${location.protocol}//${location.host}${location.pathname}${file}`;
  }
  return new _promise2.default((resolve, reject) => {
    (() => {
      const jsmediatags = __webpack_require__(197);
      try {
        jsmediatags.read(file, { onSuccess: resolve, onError: reject });
      } catch (e) {
        // Possibly jsmediatags could not find a parser for this file?
        // Nothing to do.
        // Consider removing this after https://github.com/aadsm/jsmediatags/issues/83 is resolved.
        reject(e);
      }
    })();
  });
}

function genMediaDuration(url) {
  (0, _invariant2.default)(typeof url === "string", "Attempted to get the duration of media file without passing a url");
  return new _promise2.default((resolve, reject) => {
    // TODO: Does this actually stop downloading the file once it's
    // got the duration?
    const audio = document.createElement("audio");
    audio.crossOrigin = "anonymous";
    const durationChange = () => {
      resolve(audio.duration);
      audio.removeEventListener("durationchange", durationChange);
      audio.url = null;
      // TODO: Not sure if this really gets cleaned up.
    };
    audio.addEventListener("durationchange", durationChange);
    audio.addEventListener("error", e => {
      reject(e);
    });
    audio.src = url;
  });
}

async function genArrayBufferFromFileReference(fileReference) {
  (0, _invariant2.default)(fileReference != null, "Attempted to get an ArrayBuffer without assing a fileReference");
  return new _promise2.default((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      resolve(e.target.result);
    };
    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsArrayBuffer(fileReference);
  });
}

async function genArrayBufferFromUrl(url) {
  return new _promise2.default((resolve, reject) => {
    const oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = () => {
      const arrayBuffer = oReq.response; // Note: not oReq.responseText
      resolve(arrayBuffer);
    };
    oReq.onerror = reject;

    oReq.send(null);
  });
}

async function promptForFileReferences({
  accept = null,
  directory = false
}) {
  return new _promise2.default(resolve => {
    // Does this represent a memory leak somehow?
    // Can this fail? Do we ever reject?
    const fileInput = document.createElement("input");
    if (accept) fileInput.setAttribute("accept", accept);
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.webkitdirectory = directory;
    fileInput.directory = directory;
    fileInput.mozdirectory = directory;
    // Not entirely sure why this is needed, since the input
    // was just created, but somehow this helps prevent change
    // events from getting swallowed.
    // https://stackoverflow.com/a/12102992/1263117
    fileInput.value = null;
    fileInput.addEventListener("change", e => {
      resolve(e.target.files);
    });
    fileInput.click();
  });
}

function urlIsBlobUrl(url) {
  return (/^blob:/.test(url)
  );
}

// This is not perfect, but... meh: https://stackoverflow.com/a/36756650/1263117
function filenameFromUrl(url) {
  if (urlIsBlobUrl(url)) {
    return null;
  }
  return url.split("/").pop().split("#")[0].split("?")[0];
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextMenu = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContextMenuWraper extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      offsetTop: null,
      offsetLeft: null
    };
    this._handleRightClick = this._handleRightClick.bind(this);
    this._handleGlobalClick = this._handleGlobalClick.bind(this);
  }

  _handleGlobalClick() {
    this.setState({
      selected: false,
      offsetTop: null,
      offsetLeft: null
    });
    document.removeEventListener("click", this._handleGlobalClick);
  }

  _handleRightClick(e) {
    const pageX = e.pageX,
          pageY = e.pageY;

    this.setState({
      selected: true,
      // TODO: We could do an initial render to see if the menu fits here
      // and do a second render if it does not.
      offsetTop: pageY,
      offsetLeft: pageX
    });
    // Even if you right click multiple times before closeing,
    // we should only end up with one global listener.
    document.addEventListener("click", this._handleGlobalClick);
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    var _props = this.props;
    const children = _props.children,
          renderContents = _props.renderContents,
          passThroughProps = (0, _objectWithoutProperties3.default)(_props, ["children", "renderContents"]);

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        onContextMenu: this._handleRightClick,
        style: { width: "100%", height: "100%" }
      }, passThroughProps),
      _react2.default.createElement(
        _ContextMenu.ContextMenu,
        {
          selected: this.state.selected,
          offsetTop: this.state.offsetTop,
          offsetLeft: this.state.offsetLeft
        },
        renderContents()
      ),
      children
    );
  }
}

exports.default = ContextMenuWraper;
ContextMenuWraper.propTypes = {
  children: _propTypes2.default.any.isRequired,
  renderContents: _propTypes2.default.func.isRequired
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextMenu = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContextMenuTarget extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
    this._handleHandleClick = this._handleHandleClick.bind(this);
    this._handleGlobalClick = this._handleGlobalClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this._handleGlobalClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._handleGlobalClick);
  }

  _handleHandleClick() {
    this.setState({ selected: !this.state.selected });
  }

  _handleGlobalClick(e) {
    if (this.state.selected &&
    // Not sure how, but it's possible for this to get called when handleNode is null/undefined.
    // https://sentry.io/share/issue/2066cd79f21e4f279791319f4d2ea35d/
    this.handleNode && !this.handleNode.contains(e.target)) {
      this.setState({ selected: false });
    }
  }

  render() {
    var _props = this.props;
    const handle = _props.handle,
          children = _props.children,
          top = _props.top,
          bottom = _props.bottom,
          passThroughProps = (0, _objectWithoutProperties3.default)(_props, ["handle", "children", "top", "bottom"]);

    const rect = this.handleNode ? this.handleNode.getBoundingClientRect() : { top: 0, left: 0 };
    return _react2.default.createElement(
      "div",
      passThroughProps,
      _react2.default.createElement(
        "div",
        {
          className: "handle",
          style: { width: "100%", height: "100%" },
          ref: node => this.handleNode = node,
          onClick: this._handleHandleClick
        },
        handle
      ),
      _react2.default.createElement(
        _ContextMenu.ContextMenu,
        {
          selected: this.state.selected,
          offsetTop: rect.top,
          offsetLeft: rect.left,
          top: top,
          bottom: bottom
        },
        children
      )
    );
  }
}

exports.default = ContextMenuTarget;
ContextMenuTarget.propTypes = {
  children: _propTypes2.default.any.isRequired,
  handle: _propTypes2.default.any.isRequired,
  top: _propTypes2.default.bool,
  bottom: _propTypes2.default.bool
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(123);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var core = __webpack_require__(8);
var LIBRARY = __webpack_require__(45);
var wksExt = __webpack_require__(78);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(290);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(294);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(123);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Emitter {
  on(event, callback) {
    const eventListeners = this._listeners[event] || [];
    eventListeners.push(callback);
    this._listeners[event] = eventListeners;
    const unsubscribe = () => {
      this._listeners[event] = eventListeners.filter(cb => cb !== callback);
    };
    return unsubscribe;
  }

  trigger(event) {
    const callbacks = this._listeners[event];
    if (callbacks) {
      callbacks.forEach(cb => cb());
    }
  }

  constructor() {
    this._listeners = {};
  }
}
exports.default = Emitter;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(19) && !__webpack_require__(25)(function () {
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(26);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(132)(false);
var IE_PROTO = __webpack_require__(56)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(13).document;
module.exports = document && document.documentElement;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(16);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(30);
var ITERATOR = __webpack_require__(11)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(16);
var aFunction = __webpack_require__(33);
var SPECIES = __webpack_require__(11)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(18);
var invoke = __webpack_require__(142);
var html = __webpack_require__(86);
var cel = __webpack_require__(51);
var global = __webpack_require__(13);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(35)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(65);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(13);
var core = __webpack_require__(8);
var dP = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(19);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(11)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(98);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(101);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(69);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(168);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrackDisplayName = undefined;

var _set = __webpack_require__(71);

var _set2 = _interopRequireDefault(_set);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(5);

var _fileUtils = __webpack_require__(73);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultPlaylistState = {
  trackOrder: [],
  currentTrack: null,
  tracks: {},
  lastSelectedIndex: null
};

const playlist = (state = defaultPlaylistState, action) => {
  switch (action.type) {
    case _actionTypes.CLICKED_TRACK:
      const clickedId = String(state.trackOrder[action.index]);
      return (0, _extends3.default)({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, (track, id) => (0, _extends3.default)({}, track, {
          selected: id === clickedId
        })),
        lastSelectedIndex: action.index
      });
    case _actionTypes.CTRL_CLICKED_TRACK:
      const id = state.trackOrder[action.index];
      const t = state.tracks[id];
      return (0, _extends3.default)({}, state, {
        tracks: (0, _extends3.default)({}, state.tracks, {
          [id]: (0, _extends3.default)({}, t, { selected: !t.selected })
        }),
        // Using this as the lastClickedIndex is kinda funny, since you
        // may have just _un_selected the track. However, this is what
        // Winamp 2 does, so we'll copy it.
        lastSelectedIndex: action.index
      });
    case _actionTypes.SHIFT_CLICKED_TRACK:
      if (state.lastSelectedIndex == null) {
        return state;
      }
      const clickedIndex = action.index;
      const start = Math.min(clickedIndex, state.lastSelectedIndex);
      const end = Math.max(clickedIndex, state.lastSelectedIndex);
      const selected = new _set2.default(state.trackOrder.slice(start, end + 1));
      return (0, _extends3.default)({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, (track, trackId) => (0, _extends3.default)({}, track, {
          selected: selected.has(Number(trackId))
        }))
      });
    case _actionTypes.SELECT_ALL:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, track => (0, _extends3.default)({}, track, { selected: true }))
      });
    case _actionTypes.SELECT_ZERO:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, track => (0, _extends3.default)({}, track, {
          selected: false
        }))
      });
    case _actionTypes.INVERT_SELECTION:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _utils.objectMap)(state.tracks, track => (0, _extends3.default)({}, track, {
          selected: !track.selected
        }))
      });
    case _actionTypes.REMOVE_ALL_TRACKS:
      // TODO: Consider disposing of ObjectUrls
      return (0, _extends3.default)({}, state, {
        trackOrder: [],
        currentTrack: null,
        tracks: {},
        lastSelectedIndex: null
      });
    case _actionTypes.REMOVE_TRACKS:
      // TODO: Consider disposing of ObjectUrls
      const actionIds = action.ids.map(Number);
      const currentTrack = state.currentTrack;

      return (0, _extends3.default)({}, state, {
        trackOrder: state.trackOrder.filter(trackId => !actionIds.includes(trackId)),
        currentTrack: actionIds.includes(currentTrack) ? null : currentTrack,
        tracks: (0, _utils.objectFilter)(state.tracks, (track, trackId) => !action.ids.includes(trackId)),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    case _actionTypes.REVERSE_LIST:
      return (0, _extends3.default)({}, state, {
        trackOrder: [...state.trackOrder].reverse(),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    case _actionTypes.RANDOMIZE_LIST:
      return (0, _extends3.default)({}, state, {
        trackOrder: (0, _utils.shuffle)(state.trackOrder)
      });
    case _actionTypes.SET_TRACK_ORDER:
      const trackOrder = action.trackOrder;

      return (0, _extends3.default)({}, state, { trackOrder });
    case _actionTypes.ADD_TRACK_FROM_URL:
      const atIndex = action.atIndex == null ? state.trackOrder.length : action.atIndex;
      return (0, _extends3.default)({}, state, {
        trackOrder: [...state.trackOrder.slice(0, atIndex), Number(action.id), ...state.trackOrder.slice(atIndex)],
        tracks: (0, _extends3.default)({}, state.tracks, {
          [action.id]: {
            id: action.id,
            selected: false,
            defaultName: action.defaultName,
            duration: null,
            url: action.url,
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.NOT_REQUESTED
          }
        }),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    case _actionTypes.SET_MEDIA:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _extends3.default)({}, state.tracks, {
          [action.id]: (0, _extends3.default)({}, state.tracks[action.id], {
            duration: action.length
          })
        })
      });
    case _actionTypes.SET_MEDIA_TAGS:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _extends3.default)({}, state.tracks, {
          [action.id]: (0, _extends3.default)({}, state.tracks[action.id], {
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.COMPLETE,
            title: action.title,
            artist: action.artist,
            albumArtUrl: action.albumArtUrl
          })
        })
      });
    case _actionTypes.MEDIA_TAG_REQUEST_INITIALIZED:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _extends3.default)({}, state.tracks, {
          [action.id]: (0, _extends3.default)({}, state.tracks[action.id], {
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.INITIALIZED
          })
        })
      });
    case _actionTypes.MEDIA_TAG_REQUEST_FAILED:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _extends3.default)({}, state.tracks, {
          [action.id]: (0, _extends3.default)({}, state.tracks[action.id], {
            mediaTagsRequestStatus: _constants.MEDIA_TAG_REQUEST_STATUS.FAILED
          })
        })
      });
    case _actionTypes.SET_MEDIA_DURATION:
      return (0, _extends3.default)({}, state, {
        tracks: (0, _extends3.default)({}, state.tracks, {
          [action.id]: (0, _extends3.default)({}, state.tracks[action.id], {
            duration: action.duration
          })
        })
      });
    case _actionTypes.PLAY_TRACK:
    case _actionTypes.BUFFER_TRACK:
      return (0, _extends3.default)({}, state, {
        currentTrack: action.id
      });
    case _actionTypes.DRAG_SELECTED:
      return (0, _extends3.default)({}, state, {
        trackOrder: (0, _utils.moveSelected)(state.trackOrder, i => state.tracks[state.trackOrder[i]].selected, action.offset),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });
    default:
      return state;
  }
};

exports.default = playlist;
const getTrackDisplayName = exports.getTrackDisplayName = (state, id) => {
  const track = state.tracks[id];
  if (track == null) {
    return null;
  }
  const artist = track.artist,
        title = track.title,
        defaultName = track.defaultName,
        url = track.url;

  if (artist && title) {
    return `${artist} - ${title}`;
  } else if (title) {
    return title;
  } else if (defaultName) {
    return defaultName;
  } else if (url) {
    const filename = (0, _fileUtils.filenameFromUrl)(url);
    if (filename) {
      return filename;
    }
  }
  return "???";
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(214), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports) {

var PRESET_VALUES = [
  "hz60",
  "hz170",
  "hz310",
  "hz600",
  "hz1000",
  "hz3000",
  "hz6000",
  "hz12000",
  "hz14000",
  "hz16000",
  "preamp"
];

var HEADER = "Winamp EQ library file v1.1";

module.exports = {
  PRESET_VALUES: PRESET_VALUES,
  HEADER: HEADER
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageConstFromChar = exports.FONT_LOOKUP = undefined;

var _constants = __webpack_require__(5);

/* TODO: There are too many " " and "_" characters */
const FONT_LOOKUP = exports.FONT_LOOKUP = {
  a: [0, 0],
  b: [0, 1],
  c: [0, 2],
  d: [0, 3],
  e: [0, 4],
  f: [0, 5],
  g: [0, 6],
  h: [0, 7],
  i: [0, 8],
  j: [0, 9],
  k: [0, 10],
  l: [0, 11],
  m: [0, 12],
  n: [0, 13],
  o: [0, 14],
  p: [0, 15],
  q: [0, 16],
  r: [0, 17],
  s: [0, 18],
  t: [0, 19],
  u: [0, 20],
  v: [0, 21],
  w: [0, 22],
  x: [0, 23],
  y: [0, 24],
  z: [0, 25],
  '"': [0, 26],
  "@": [0, 27],
  " ": [0, 30],
  "0": [1, 0],
  "1": [1, 1],
  "2": [1, 2],
  "3": [1, 3],
  "4": [1, 4],
  "5": [1, 5],
  "6": [1, 6],
  "7": [1, 7],
  "8": [1, 8],
  "9": [1, 9],
  [_constants.UTF8_ELLIPSIS]: [1, 10],
  _: [1, 11],
  ":": [1, 12],
  "(": [1, 13],
  ")": [1, 14],
  "-": [1, 15],
  "'": [1, 16],
  "!": [1, 17],
  "+": [1, 19],
  "\\": [1, 20],
  "/": [1, 21],
  "[": [1, 22],
  "]": [1, 23],
  "^": [1, 24],
  "&": [1, 25],
  "%": [1, 26],
  ".": [1, 27],
  "=": [1, 28],
  $: [1, 29],
  "#": [1, 30],
  Å: [2, 0],
  Ö: [2, 1],
  Ä: [2, 2],
  "?": [2, 3],
  "*": [2, 4],
  "<": [1, 22],
  ">": [1, 23],
  "{": [1, 22],
  "}": [1, 23]
};

const imageConstFromChar = exports.imageConstFromChar = char => `CHARACTER_${char.charCodeAt(0)}`;

const CHAR_X = 5;
const CHAR_Y = 6;

const characterSprites = [];
for (const key in FONT_LOOKUP) {
  if (FONT_LOOKUP.hasOwnProperty(key)) {
    const position = FONT_LOOKUP[key];
    characterSprites.push({
      name: imageConstFromChar(key),
      y: position[0] * CHAR_Y,
      x: position[1] * CHAR_X,
      width: CHAR_X,
      height: CHAR_Y
    });
  }
}

exports.default = {
  BALANCE: [{ name: "MAIN_BALANCE_BACKGROUND", x: 9, y: 0, width: 38, height: 420 }, { name: "MAIN_BALANCE_THUMB", x: 15, y: 422, width: 14, height: 11 }, { name: "MAIN_BALANCE_THUMB_ACTIVE", x: 0, y: 422, width: 14, height: 11 }],
  CBUTTONS: [{ name: "MAIN_PREVIOUS_BUTTON", x: 0, y: 0, width: 23, height: 18 }, {
    name: "MAIN_PREVIOUS_BUTTON_ACTIVE",
    x: 0,
    y: 18,
    width: 23,
    height: 18
  }, { name: "MAIN_PLAY_BUTTON", x: 23, y: 0, width: 23, height: 18 }, { name: "MAIN_PLAY_BUTTON_ACTIVE", x: 23, y: 18, width: 23, height: 18 }, { name: "MAIN_PAUSE_BUTTON", x: 46, y: 0, width: 23, height: 18 }, { name: "MAIN_PAUSE_BUTTON_ACTIVE", x: 46, y: 18, width: 23, height: 18 }, { name: "MAIN_STOP_BUTTON", x: 69, y: 0, width: 23, height: 18 }, { name: "MAIN_STOP_BUTTON_ACTIVE", x: 69, y: 18, width: 23, height: 18 }, { name: "MAIN_NEXT_BUTTON", x: 92, y: 0, width: 23, height: 18 }, { name: "MAIN_NEXT_BUTTON_ACTIVE", x: 92, y: 18, width: 22, height: 18 }, { name: "MAIN_EJECT_BUTTON", x: 114, y: 0, width: 22, height: 16 }, { name: "MAIN_EJECT_BUTTON_ACTIVE", x: 114, y: 16, width: 22, height: 16 }],
  MAIN: [{ name: "MAIN_WINDOW_BACKGROUND", x: 0, y: 0, width: 275, height: 116 }],
  MONOSTER: [{ name: "MAIN_STEREO", x: 0, y: 12, width: 29, height: 12 }, { name: "MAIN_STEREO_SELECTED", x: 0, y: 0, width: 29, height: 12 }, { name: "MAIN_MONO", x: 29, y: 12, width: 27, height: 12 }, { name: "MAIN_MONO_SELECTED", x: 29, y: 0, width: 27, height: 12 }],
  NUMBERS: [{ name: "NO_MINUS_SIGN", x: 9, y: 6, width: 5, height: 1 }, { name: "MINUS_SIGN", x: 20, y: 6, width: 5, height: 1 }, { name: "DIGIT_0", x: 0, y: 0, width: 9, height: 13 }, { name: "DIGIT_1", x: 9, y: 0, width: 9, height: 13 }, { name: "DIGIT_2", x: 18, y: 0, width: 9, height: 13 }, { name: "DIGIT_3", x: 27, y: 0, width: 9, height: 13 }, { name: "DIGIT_4", x: 36, y: 0, width: 9, height: 13 }, { name: "DIGIT_5", x: 45, y: 0, width: 9, height: 13 }, { name: "DIGIT_6", x: 54, y: 0, width: 9, height: 13 }, { name: "DIGIT_7", x: 63, y: 0, width: 9, height: 13 }, { name: "DIGIT_8", x: 72, y: 0, width: 9, height: 13 }, { name: "DIGIT_9", x: 81, y: 0, width: 9, height: 13 }],
  NUMS_EX: [{ name: "NO_MINUS_SIGN_EX", x: 90, y: 0, width: 9, height: 13 }, { name: "MINUS_SIGN_EX", x: 99, y: 0, width: 9, height: 13 }, { name: "DIGIT_0_EX", x: 0, y: 0, width: 9, height: 13 }, { name: "DIGIT_1_EX", x: 9, y: 0, width: 9, height: 13 }, { name: "DIGIT_2_EX", x: 18, y: 0, width: 9, height: 13 }, { name: "DIGIT_3_EX", x: 27, y: 0, width: 9, height: 13 }, { name: "DIGIT_4_EX", x: 36, y: 0, width: 9, height: 13 }, { name: "DIGIT_5_EX", x: 45, y: 0, width: 9, height: 13 }, { name: "DIGIT_6_EX", x: 54, y: 0, width: 9, height: 13 }, { name: "DIGIT_7_EX", x: 63, y: 0, width: 9, height: 13 }, { name: "DIGIT_8_EX", x: 72, y: 0, width: 9, height: 13 }, { name: "DIGIT_9_EX", x: 81, y: 0, width: 9, height: 13 }],
  PLAYPAUS: [{ name: "MAIN_PLAYING_INDICATOR", x: 0, y: 0, width: 9, height: 9 }, { name: "MAIN_PAUSED_INDICATOR", x: 9, y: 0, width: 9, height: 9 }, { name: "MAIN_STOPPED_INDICATOR", x: 18, y: 0, width: 9, height: 9 }, { name: "MAIN_NOT_WORKING_INDICATOR", x: 36, y: 0, width: 9, height: 9 }, { name: "MAIN_WORKING_INDICATOR", x: 39, y: 0, width: 9, height: 9 }],
  PLEDIT: [{ name: "PLAYLIST_TOP_TILE", x: 127, y: 21, width: 25, height: 20 }, { name: "PLAYLIST_TOP_LEFT_CORNER", x: 0, y: 21, width: 25, height: 20 }, { name: "PLAYLIST_TITLE_BAR", x: 26, y: 21, width: 100, height: 20 }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER",
    x: 153,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_TILE_SELECTED",
    x: 127,
    y: 0,
    width: 25,
    height: 20
  }, { name: "PLAYLIST_TOP_LEFT_SELECTED", x: 0, y: 0, width: 25, height: 20 }, {
    name: "PLAYLIST_TITLE_BAR_SELECTED",
    x: 26,
    y: 0,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER_SELECTED",
    x: 153,
    y: 0,
    width: 25,
    height: 20
  }, { name: "PLAYLIST_LEFT_TILE", x: 0, y: 42, width: 12, height: 29 }, { name: "PLAYLIST_RIGHT_TILE", x: 31, y: 42, width: 20, height: 29 }, { name: "PLAYLIST_BOTTOM_TILE", x: 179, y: 0, width: 25, height: 38 }, {
    name: "PLAYLIST_BOTTOM_LEFT_CORNER",
    x: 0,
    y: 72,
    width: 125,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_RIGHT_CORNER",
    x: 126,
    y: 72,
    width: 150,
    height: 38
  }, {
    name: "PLAYLIST_VISUALIZER_BACKGROUND",
    x: 205,
    y: 0,
    width: 75,
    height: 38
  }, { name: "PLAYLIST_SHADE_BACKGROUND", x: 72, y: 57, width: 25, height: 14 }, {
    name: "PLAYLIST_SHADE_BACKGROUND_LEFT",
    x: 72,
    y: 42,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT",
    x: 99,
    y: 57,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED",
    x: 99,
    y: 42,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SCROLL_HANDLE_SELECTED",
    x: 61,
    y: 53,
    width: 8,
    height: 18
  }, { name: "PLAYLIST_SCROLL_HANDLE", x: 52, y: 53, width: 8, height: 18 }, { name: "PLAYLIST_ADD_URL", x: 0, y: 111, width: 22, height: 18 }, { name: "PLAYLIST_ADD_URL_SELECTED", x: 23, y: 111, width: 22, height: 18 }, { name: "PLAYLIST_ADD_DIR", x: 0, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_ADD_DIR_SELECTED", x: 23, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_ADD_FILE", x: 0, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_ADD_FILE_SELECTED",
    x: 23,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_REMOVE_ALL", x: 54, y: 111, width: 22, height: 18 }, {
    name: "PLAYLIST_REMOVE_ALL_SELECTED",
    x: 77,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_CROP", x: 54, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_CROP_SELECTED", x: 77, y: 130, width: 22, height: 18 }, { name: "PLAYLIST_REMOVE_SELECTED", x: 54, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_REMOVE_SELECTED_SELECTED",
    x: 77,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_REMOVE_MISC", x: 54, y: 168, width: 22, height: 18 }, {
    name: "PLAYLIST_REMOVE_MISC_SELECTED",
    x: 77,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION",
    x: 104,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION_SELECTED",
    x: 127,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SELECT_ZERO", x: 104, y: 130, width: 22, height: 18 }, {
    name: "PLAYLIST_SELECT_ZERO_SELECTED",
    x: 127,
    y: 130,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SELECT_ALL", x: 104, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_SELECT_ALL_SELECTED",
    x: 127,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SORT_LIST", x: 154, y: 111, width: 22, height: 18 }, {
    name: "PLAYLIST_SORT_LIST_SELECTED",
    x: 177,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_FILE_INFO", x: 154, y: 130, width: 22, height: 18 }, {
    name: "PLAYLIST_FILE_INFO_SELECTED",
    x: 177,
    y: 130,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_MISC_OPTIONS", x: 154, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_MISC_OPTIONS_SELECTED",
    x: 177,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_NEW_LIST", x: 204, y: 111, width: 22, height: 18 }, {
    name: "PLAYLIST_NEW_LIST_SELECTED",
    x: 227,
    y: 111,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_SAVE_LIST", x: 204, y: 130, width: 22, height: 18 }, {
    name: "PLAYLIST_SAVE_LIST_SELECTED",
    x: 227,
    y: 130,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_LOAD_LIST", x: 204, y: 149, width: 22, height: 18 }, {
    name: "PLAYLIST_LOAD_LIST_SELECTED",
    x: 227,
    y: 149,
    width: 22,
    height: 18
  }, { name: "PLAYLIST_ADD_MENU_BAR", x: 48, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_REMOVE_MENU_BAR", x: 100, y: 111, width: 3, height: 72 }, { name: "PLAYLIST_SELECT_MENU_BAR", x: 150, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_MISC_MENU_BAR", x: 200, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_LIST_BAR", x: 250, y: 111, width: 3, height: 54 }, { name: "PLAYLIST_CLOSE_SELECTED", x: 52, y: 42, width: 9, height: 9 }, { name: "PLAYLIST_COLLAPSE_SELECTED", x: 62, y: 42, width: 9, height: 9 }, { name: "PLAYLIST_EXPAND_SELECTED", x: 150, y: 42, width: 9, height: 9 }],
  EQ_EX: [{
    name: "EQ_SHADE_BACKGROUND_SELECTED",
    x: 0,
    y: 0,
    width: 275,
    height: 14
  }, { name: "EQ_SHADE_BACKGROUND", x: 0, y: 15, width: 275, height: 14 }, { name: "EQ_SHADE_VOLUME_SLIDER_LEFT", x: 1, y: 30, width: 3, height: 7 }, { name: "EQ_SHADE_VOLUME_SLIDER_CENTER", x: 4, y: 30, width: 3, height: 7 }, { name: "EQ_SHADE_VOLUME_SLIDER_RIGHT", x: 7, y: 30, width: 3, height: 7 }, { name: "EQ_SHADE_BALANCE_SLIDER_LEFT", x: 11, y: 30, width: 3, height: 7 }, {
    name: "EQ_SHADE_BALANCE_SLIDER_CENTER",
    x: 14,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_RIGHT",
    x: 17,
    y: 30,
    width: 3,
    height: 7
  }, { name: "EQ_MAXIMIZE_BUTTON_ACTIVE", x: 1, y: 38, width: 9, height: 9 }, { name: "EQ_MINIMIZE_BUTTON_ACTIVE", x: 1, y: 47, width: 9, height: 9 }, { name: "EQ_CLOSE_BUTTON", x: 11, y: 38, width: 9, height: 9 }, { name: "EQ_CLOSE_BUTTON_ACTIVE", x: 11, y: 47, width: 9, height: 9 }],
  EQMAIN: [{ name: "EQ_WINDOW_BACKGROUND", x: 0, y: 0, width: 275, height: 116 }, { name: "EQ_TITLE_BAR", x: 0, y: 149, width: 275, height: 14 }, { name: "EQ_TITLE_BAR_SELECTED", x: 0, y: 134, width: 275, height: 14 }, { name: "EQ_SLIDER_BACKGROUND", x: 13, y: 164, width: 209, height: 129 }, { name: "EQ_SLIDER_THUMB", x: 0, y: 164, width: 11, height: 11 }, { name: "EQ_SLIDER_THUMB_SELECTED", x: 0, y: 176, width: 11, height: 11 }, { name: "EQ_ON_BUTTON", x: 10, y: 119, width: 26, height: 12 }, { name: "EQ_ON_BUTTON_DEPRESSED", x: 128, y: 119, width: 26, height: 12 }, { name: "EQ_ON_BUTTON_SELECTED", x: 69, y: 119, width: 26, height: 12 }, {
    name: "EQ_ON_BUTTON_SELECTED_DEPRESSED",
    x: 187,
    y: 119,
    width: 26,
    height: 12
  }, { name: "EQ_AUTO_BUTTON", x: 36, y: 119, width: 32, height: 12 }, {
    name: "EQ_AUTO_BUTTON_DEPRESSED",
    x: 154,
    y: 119,
    width: 32,
    height: 12
  }, { name: "EQ_AUTO_BUTTON_SELECTED", x: 95, y: 119, width: 32, height: 12 }, {
    name: "EQ_AUTO_BUTTON_SELECTED_DEPRESSED",
    x: 213,
    y: 119,
    width: 32,
    height: 12
  }, { name: "EQ_GRAPH_BACKGROUND", x: 0, y: 294, width: 113, height: 19 }, { name: "EQ_GRAPH_LINE_COLORS", x: 115, y: 294, width: 1, height: 19 }, { name: "EQ_PRESETS_BUTTON", x: 224, y: 164, width: 44, height: 12 }, {
    name: "EQ_PRESETS_BUTTON_SELECTED",
    x: 224,
    y: 176,
    width: 44,
    height: 12
  }, { name: "EQ_PREAMP_LINE", x: 0, y: 314, width: 113, height: 1 }],
  POSBAR: [{
    name: "MAIN_POSITION_SLIDER_BACKGROUND",
    x: 0,
    y: 0,
    width: 248,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB",
    x: 248,
    y: 0,
    width: 29,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB_SELECTED",
    x: 278,
    y: 0,
    width: 29,
    height: 10
  }],
  SHUFREP: [{ name: "MAIN_SHUFFLE_BUTTON", x: 28, y: 0, width: 47, height: 15 }, {
    name: "MAIN_SHUFFLE_BUTTON_DEPRESSED",
    x: 28,
    y: 15,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED",
    x: 28,
    y: 30,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED",
    x: 28,
    y: 45,
    width: 47,
    height: 15
  }, { name: "MAIN_REPEAT_BUTTON", x: 0, y: 0, width: 28, height: 15 }, {
    name: "MAIN_REPEAT_BUTTON_DEPRESSED",
    x: 0,
    y: 15,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED",
    x: 0,
    y: 30,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED",
    x: 0,
    y: 45,
    width: 28,
    height: 15
  }, { name: "MAIN_EQ_BUTTON", x: 0, y: 61, width: 23, height: 12 }, { name: "MAIN_EQ_BUTTON_SELECTED", x: 0, y: 73, width: 23, height: 12 }, { name: "MAIN_EQ_BUTTON_DEPRESSED", x: 46, y: 61, width: 23, height: 12 }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED_SELECTED",
    x: 46,
    y: 73,
    width: 23,
    height: 12
  }, { name: "MAIN_PLAYLIST_BUTTON", x: 23, y: 61, width: 23, height: 12 }, {
    name: "MAIN_PLAYLIST_BUTTON_SELECTED",
    x: 23,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED",
    x: 69,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED",
    x: 69,
    y: 61,
    width: 23,
    height: 12
  }],
  TEXT: characterSprites,
  TITLEBAR: [{ name: "MAIN_TITLE_BAR", x: 27, y: 15, width: 275, height: 14 }, { name: "MAIN_TITLE_BAR_SELECTED", x: 27, y: 0, width: 275, height: 14 }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR",
    x: 27,
    y: 72,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR_SELECTED",
    x: 27,
    y: 57,
    width: 275,
    height: 14
  }, { name: "MAIN_OPTIONS_BUTTON", x: 0, y: 0, width: 9, height: 9 }, {
    name: "MAIN_OPTIONS_BUTTON_DEPRESSED",
    x: 0,
    y: 9,
    width: 9,
    height: 9
  }, { name: "MAIN_MINIMIZE_BUTTON", x: 9, y: 0, width: 9, height: 9 }, {
    name: "MAIN_MINIMIZE_BUTTON_DEPRESSED",
    x: 9,
    y: 9,
    width: 9,
    height: 9
  }, { name: "MAIN_SHADE_BUTTON", x: 0, y: 18, width: 9, height: 9 }, { name: "MAIN_SHADE_BUTTON_DEPRESSED", x: 9, y: 18, width: 9, height: 9 }, { name: "MAIN_CLOSE_BUTTON", x: 18, y: 0, width: 9, height: 9 }, { name: "MAIN_CLOSE_BUTTON_DEPRESSED", x: 18, y: 9, width: 9, height: 9 }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND",
    x: 304,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND_DISABLED",
    x: 312,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_O_SELECTED",
    x: 304,
    y: 47,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_A_SELECTED",
    x: 312,
    y: 55,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_I_SELECTED",
    x: 320,
    y: 62,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_D_SELECTED",
    x: 328,
    y: 69,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_V_SELECTED",
    x: 336,
    y: 77,
    width: 8,
    height: 7
  }, { name: "MAIN_SHADE_BACKGROUND", x: 27, y: 42, width: 275, height: 14 }, {
    name: "MAIN_SHADE_BACKGROUND_SELECTED",
    x: 27,
    y: 29,
    width: 275,
    height: 14
  }, { name: "MAIN_SHADE_BUTTON_SELECTED", x: 0, y: 27, width: 9, height: 9 }, {
    name: "MAIN_SHADE_BUTTON_SELECTED_DEPRESSED",
    x: 9,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_POSITION_BACKGROUND",
    x: 0,
    y: 36,
    width: 17,
    height: 7
  }, { name: "MAIN_SHADE_POSITION_THUMB", x: 20, y: 36, width: 3, height: 7 }, {
    name: "MAIN_SHADE_POSITION_THUMB_LEFT",
    x: 17,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_RIGHT",
    x: 23,
    y: 36,
    width: 3,
    height: 7
  }],
  VOLUME: [{ name: "MAIN_VOLUME_BACKGROUND", x: 0, y: 0, width: 68, height: 420 }, { name: "MAIN_VOLUME_THUMB", x: 15, y: 422, width: 14, height: 11 }, {
    name: "MAIN_VOLUME_THUMB_SELECTED",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  GEN: [{ name: "GEN_TOP_LEFT_SELECTED", x: 0, y: 0, width: 25, height: 20 }, { name: "GEN_TOP_LEFT_END_SELECTED", x: 26, y: 0, width: 25, height: 20 }, {
    name: "GEN_TOP_CENTER_FILL_SELECTED",
    x: 52,
    y: 0,
    width: 25,
    height: 20
  }, { name: "GEN_TOP_RIGHT_END_SELECTED", x: 78, y: 0, width: 25, height: 20 }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL_SELECTED",
    x: 104,
    y: 0,
    width: 25,
    height: 20
  }, { name: "GEN_TOP_RIGHT_SELECTED", x: 130, y: 0, width: 25, height: 20 }, { name: "GEN_TOP_LEFT", x: 0, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_LEFT_END", x: 26, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_CENTER_FILL", x: 52, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_RIGHT_END", x: 78, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_LEFT_RIGHT_FILL", x: 104, y: 21, width: 25, height: 20 }, { name: "GEN_TOP_RIGHT", x: 130, y: 21, width: 25, height: 20 }, { name: "GEN_BOTTOM_LEFT", x: 0, y: 42, width: 125, height: 14 }, { name: "GEN_BOTTOM_RIGHT", x: 0, y: 57, width: 125, height: 14 }, { name: "GEN_BOTTOM_FILL", x: 127, y: 72, width: 25, height: 14 }, { name: "GEN_MIDDLE_LEFT", x: 127, y: 42, width: 11, height: 29 }, { name: "GEN_MIDDLE_LEFT_BOTTOM", x: 158, y: 42, width: 11, height: 24 }, { name: "GEN_MIDDLE_RIGHT", x: 139, y: 42, width: 8, height: 29 }, { name: "GEN_MIDDLE_RIGHT_BOTTOM", x: 170, y: 42, width: 8, height: 24 }, { name: "GEN_CLOSE_SELECTED", x: 148, y: 42, width: 9, height: 9 }]
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(28);
var toIObject = __webpack_require__(27);
var isEnum = __webpack_require__(36).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entries = __webpack_require__(112);

var _entries2 = _interopRequireDefault(_entries);

var _slicedToArray2 = __webpack_require__(32);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

exports.getPositionDiff = getPositionDiff;
exports.generateGraph = generateGraph;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPositionDiff(graph, sizeDiff) {
  const newGraph = {};
  const positionDiff = {};
  for (const key of (0, _keys2.default)(graph)) {
    newGraph[key] = { above: [], left: [] };
    positionDiff[key] = { x: 0, y: 0 };
  }

  // Construct an inverted graph
  for (const _ref of (0, _entries2.default)(graph)) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

    const key = _ref2[0];
    const neighbors = _ref2[1];
    const below = neighbors.below,
          right = neighbors.right;

    if (right != null) {
      newGraph[right].left.push(key);
    }
    if (below != null) {
      newGraph[below].above.push(key);
    }
  }

  function walkRight(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.left.forEach(left => {
      positionDiff[left].x += nodeSizeDiff.width + positionDiff[key].x;
      walkRight(left);
    });
  }

  function walkDown(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.above.forEach(above => {
      positionDiff[above].y += nodeSizeDiff.height + positionDiff[key].y;
      walkDown(above);
    });
  }

  // Find disconnected nodes, and walk
  for (const _ref3 of (0, _entries2.default)(graph)) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

    const key = _ref4[0];
    const neighbors = _ref4[1];

    if (neighbors.below == null) {
      walkDown(key);
    }
    if (neighbors.right == null) {
      walkRight(key);
    }
  }

  return positionDiff;
}

function generateGraph(windows) {
  const bottoms = {};
  const rights = {};
  for (const w of windows) {
    const bottom = w.y + w.height;
    if (bottoms[bottom]) {
      bottoms[bottom].push(w);
    } else {
      bottoms[bottom] = [w];
    }

    const right = w.x + w.width;
    if (rights[right]) {
      rights[right].push(w);
    } else {
      rights[right] = [w];
    }
  }

  const graph = {};
  for (const w of windows) {
    const edges = {};
    const top = w.y;
    const left = w.x;

    const tops = bottoms[top];
    const lefts = rights[left];
    if (tops) {
      for (const below of tops) {
        const isToTheLeft = below.x + below.width < w.x;
        const isToTheRight = below.x > w.x + w.width;

        const overlapsInX = !(isToTheLeft || isToTheRight);
        if (overlapsInX) {
          edges.below = below.key;
          break;
        }
      }
    }
    if (lefts) {
      for (const right of lefts) {
        const isAbove = right.y + right.height < w.y;
        const isBelow = right.y > w.y + w.height;
        const overlapsInY = !(isAbove || isBelow);
        if (overlapsInY) {
          edges.right = right.key;
          break;
        }
      }
    }

    graph[w.key] = edges;
  }
  return graph;
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(233), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMultipleDiffs = exports.applyDiff = exports.traceConnection = exports.boundingBox = exports.applySnap = exports.snapWithinDiff = exports.snapWithin = exports.snapToMany = exports.snapDiffManyToMany = exports.snapDiff = exports.snap = exports.overlapY = exports.overlapX = exports.near = exports.right = exports.left = exports.bottom = exports.top = exports.SNAP_DISTANCE = undefined;

var _set = __webpack_require__(71);

var _set2 = _interopRequireDefault(_set);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// box = {x, y, width, height}

const SNAP_DISTANCE = exports.SNAP_DISTANCE = 15;

const top = exports.top = box => box.y;
const bottom = exports.bottom = box => box.y + box.height;
const left = exports.left = box => box.x;
const right = exports.right = box => box.x + box.width;

const near = exports.near = (a, b) => Math.abs(a - b) < SNAP_DISTANCE;

// http://stackoverflow.com/a/3269471/1263117
const overlapX = exports.overlapX = (a, b) => left(a) <= right(b) + SNAP_DISTANCE && left(b) <= right(a) + SNAP_DISTANCE;
const overlapY = exports.overlapY = (a, b) => top(a) <= bottom(b) + SNAP_DISTANCE && top(b) <= bottom(a) + SNAP_DISTANCE;

// Give a new position for `boxA` that snaps it to `boxB` if neede.
const snap = exports.snap = (boxA, boxB) => {
  let x, y;

  // TODO: Refactor/simplify this code
  if (overlapY(boxA, boxB)) {
    if (near(left(boxA), right(boxB))) {
      x = right(boxB);
    } else if (near(right(boxA), left(boxB))) {
      x = left(boxB) - boxA.width;
    } else if (near(left(boxA), left(boxB))) {
      x = left(boxB);
    } else if (near(right(boxA), right(boxB))) {
      x = right(boxB) - boxA.width;
    }
  }

  if (overlapX(boxA, boxB)) {
    if (near(top(boxA), bottom(boxB))) {
      y = bottom(boxB);
    } else if (near(bottom(boxA), top(boxB))) {
      y = top(boxB) - boxA.height;
    } else if (near(top(boxA), top(boxB))) {
      y = top(boxB);
    } else if (near(bottom(boxA), bottom(boxB))) {
      y = bottom(boxB) - boxA.height;
    }
  }
  return { x, y };
};

const snapDiff = exports.snapDiff = (a, b) => {
  const newPos = snap(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};

// TODO: Use the first x and y combo
const snapDiffManyToMany = exports.snapDiffManyToMany = (as, bs) => {
  let x = 0;
  let y = 0;
  for (const a of as) {
    for (const b of bs) {
      const diff = snapDiff(a, b);
      x = x || diff.x;
      y = y || diff.y;
      if (x > 0 && y > 0) {
        break;
      }
    }
  }
  return { x, y };
};

const snapToMany = exports.snapToMany = (boxA, otherBoxes) => {
  let x, y;

  otherBoxes.forEach(boxB => {
    const newPos = snap(boxA, boxB);
    x = newPos.x || x;
    y = newPos.y || y;
  });

  return { x, y };
};

const snapWithin = exports.snapWithin = (boxA, boundingBox) => {
  let x, y;

  if (boxA.x - SNAP_DISTANCE < 0) {
    x = 0;
  } else if (boxA.x + boxA.width + SNAP_DISTANCE > boundingBox.width) {
    x = boundingBox.width - boxA.width;
  }

  if (boxA.y - SNAP_DISTANCE < 0) {
    y = 0;
  } else if (boxA.y + boxA.height + SNAP_DISTANCE > boundingBox.height) {
    y = boundingBox.height - boxA.height;
  }

  return { x, y };
};

const snapWithinDiff = exports.snapWithinDiff = (a, b) => {
  const newPos = snapWithin(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};

const applySnap = exports.applySnap = (original, ...snaps) => snaps.reduce((previous, snapped) => (0, _extends3.default)({}, previous, {
  x: typeof snapped.x !== "undefined" ? snapped.x : previous.x,
  y: typeof snapped.y !== "undefined" ? snapped.y : previous.y
}), original);

const boundingBox = exports.boundingBox = nodes => {
  const boxes = nodes.slice();
  const firstNode = boxes.pop();
  const bounding = {
    top: top(firstNode),
    right: right(firstNode),
    bottom: bottom(firstNode),
    left: left(firstNode)
  };

  boxes.forEach(node => {
    bounding.top = Math.min(bounding.top, top(node));
    bounding.right = Math.max(bounding.right, right(node));
    bounding.bottom = Math.max(bounding.bottom, bottom(node));
    bounding.left = Math.min(bounding.left, left(node));
  });

  return {
    x: bounding.left,
    y: bounding.top,
    width: bounding.right - bounding.left,
    height: bounding.bottom - bounding.top
  };
};

const traceConnection = exports.traceConnection = areConnected => (candidates, node) => {
  const connected = new _set2.default();
  const checkNode = n => {
    for (const candidate of candidates) {
      if (!connected.has(candidate) && areConnected(candidate, n)) {
        connected.add(candidate);
        checkNode(candidate);
      }
    }
  };
  checkNode(node);
  return connected;
};

const applyDiff = exports.applyDiff = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y
});

// TODO: This should not
const applyMultipleDiffs = exports.applyMultipleDiffs = (initial, ...diffs) => {
  const metaDiff = diffs.reduce((m, diff) => ({
    // Use the smallest non-zero diff for each axis.
    // TODO: Min should be the absolute value
    x: m.x === 0 || diff.x === 0 ? m.x + diff.x : Math.min(m.x, diff.x),
    y: m.y === 0 || diff.y === 0 ? m.y + diff.y : Math.min(m.y, diff.y)
  }));
  return applyDiff(initial, metaDiff);
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

var _constants = __webpack_require__(5);

var _ContextMenu = __webpack_require__(20);

var _PlaybackContextMenu = __webpack_require__(241);

var _PlaybackContextMenu2 = _interopRequireDefault(_PlaybackContextMenu);

var _SkinsContextMenu = __webpack_require__(242);

var _SkinsContextMenu2 = _interopRequireDefault(_SkinsContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainContextMenu = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_ContextMenu.LinkNode, {
    href: "https://github.com/captbaritone/webamp",
    target: "_blank",
    label: "Webamp..."
  }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(
    _ContextMenu.Parent,
    { label: "Play" },
    _react2.default.createElement(_ContextMenu.Node, { onClick: props.openMediaFileDialog, label: "File...", hotkey: "L" }),
    props.filePickers && props.filePickers.map((picker, i) => (props.networkConnected || !picker.requiresNetwork) && _react2.default.createElement(_ContextMenu.Node, {
      key: i,
      onClick: async () => {
        let files;
        try {
          files = await picker.filePicker();
        } catch (e) {
          console.error("Error loading from file picker", e);
        }
        props.loadMediaFiles(files, _constants.LOAD_STYLE.PLAY);
      },
      label: picker.contextMenuName
    }))
  ),
  _react2.default.createElement(_ContextMenu.Hr, null),
  (0, _keys2.default)(props.genWindows).map(i => _react2.default.createElement(_ContextMenu.Node, {
    key: i,
    label: props.genWindows[i].title,
    checked: props.genWindows[i].open,
    onClick: () => props.toggleGenWindow(i),
    hotKey: () => props.genWindows[i].hotkey
  })),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_SkinsContextMenu2.default, null),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(
    _ContextMenu.Parent,
    { label: "Playback" },
    _react2.default.createElement(_PlaybackContextMenu2.default, null)
  ),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.close, label: "Exit" })
);

const mapStateToProps = state => ({
  networkConnected: state.network.connected,
  genWindows: (0, _selectors.getGenWindows)(state)
});

const mapDispatchToProps = {
  close: _actionCreators.close,
  openMediaFileDialog: _actionCreators.openMediaFileDialog,
  loadMediaFiles: _actionCreators.loadMediaFiles,
  toggleGenWindow: _actionCreators.toggleWindow
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainContextMenu);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DropTarget extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this._ref = this._ref.bind(this);
  }

  supress(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = "link";
    e.dataTransfer.effectAllowed = "link";
  }

  handleDrop(e) {
    this.supress(e);
    if (!this._node) {
      return;
    }

    var _node$getBoundingClie = this._node.getBoundingClientRect();

    const x = _node$getBoundingClie.x,
          y = _node$getBoundingClie.y;

    this.props.handleDrop(e, { x, y });
  }

  _ref(node) {
    this._node = node;
  }

  render() {
    var _props = this.props;
    const loadFilesFromReferences = _props.loadFilesFromReferences,
          handleDrop = _props.handleDrop,
          passThroughProps = (0, _objectWithoutProperties3.default)(_props, ["loadFilesFromReferences", "handleDrop"]);

    return _react2.default.createElement("div", (0, _extends3.default)({}, passThroughProps, {
      onDragStart: this.supress,
      onDragEnter: this.supress,
      onDragOver: this.supress,
      onDrop: this.handleDrop,
      ref: this._ref
    }));
  }
}
exports.default = DropTarget;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

var _Character = __webpack_require__(117);

var _Character2 = _interopRequireDefault(_Character);

__webpack_require__(245);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sigh. When he display is blinking (say when it's paused) we need to
// alternate between the actual caracter and the space character. Not
// Possible to that in purce CSS with the background being dynamically generated.
// All "space" characters is also how Winamp renders no content.
const Background = () => [1, 7, 12, 20, 25].map((left, i) => _react2.default.createElement(_Character2.default, {
  style: { left },
  key: i,
  className: "background-character",
  children: " "
}));

const MiniTime = props => {
  let seconds = null;
  // TODO: Clean this up: If stopped, just render the background, rather than
  // rendering spaces twice.
  if (props.status !== "STOPPED") {
    seconds = props.timeMode === "ELAPSED" ? props.timeElapsed : props.length - props.timeElapsed;
  }

  const timeObj = (0, _utils.getTimeObj)(seconds);
  const showMinus = props.timeMode === "REMAINING" && props.status !== "STOPPED";
  return _react2.default.createElement(
    "div",
    {
      onClick: props.toggle,
      className: (0, _classnames2.default)("mini-time", "countdown", {
        blinking: props.status === "PAUSED"
      })
    },
    _react2.default.createElement(Background, null),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 1 } },
      showMinus ? "-" : " "
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 7 } },
      timeObj.minutesFirstDigit
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 12 } },
      timeObj.minutesSecondDigit
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 20 } },
      timeObj.secondsFirstDigit
    ),
    _react2.default.createElement(
      _Character2.default,
      { style: { left: 25 } },
      timeObj.secondsSecondDigit
    )
  );
};

const mapDispatchToProps = {
  toggle: () => ({ type: _actionTypes.TOGGLE_TIME_MODE })
};

exports.default = (0, _reactRedux.connect)(state => state.media, mapDispatchToProps)(MiniTime);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.characterClassName = undefined;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const characterClassName = exports.characterClassName = char => `character-${char.toString().toLowerCase().charCodeAt(0)}`;

const Character = (_ref) => {
  let char = _ref.children,
      className = _ref.className,
      passThrough = (0, _objectWithoutProperties3.default)(_ref, ["children", "className"]);
  return _react2.default.createElement(
    "span",
    (0, _extends3.default)({}, passThrough, {
      className: `${className || ""} character ${characterClassName(char)}`
    }),
    char
  );
};

Character.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
};

exports.default = Character;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Balance = props => _react2.default.createElement("input", {
  id: props.id,
  className: props.className,
  type: "range",
  min: "-100",
  max: "100",
  step: "1",
  value: props.balance,
  style: props.style,
  onChange: props.handleChange,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Balance"
});

const mapDispatchToProps = dispatch => ({
  handleChange: e => dispatch((0, _actionCreators.setBalance)(e.target.value)),
  showMarquee: () => dispatch({ type: _actionTypes.SET_FOCUS, input: "balance" }),
  hideMarquee: () => dispatch({ type: _actionTypes.UNSET_FOCUS })
});

exports.default = (0, _reactRedux.connect)(state => ({ balance: state.media.balance }), mapDispatchToProps)(Balance);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Volume = props => _react2.default.createElement("input", {
  id: props.id,
  type: "range",
  min: "0",
  max: "100",
  step: "1",
  value: props.volume,
  style: props.style,
  className: props.className,
  onChange: props.setVolume,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Volume Bar"
});

const mapStateToProps = state => ({
  volume: state.media.volume
});

const mapDispatchToProps = dispatch => ({
  showMarquee: () => dispatch({ type: _actionTypes.SET_FOCUS, input: "volume" }),
  hideMarquee: () => dispatch({ type: _actionTypes.UNSET_FOCUS }),
  setVolume: e => dispatch((0, _actionCreators.setVolume)(e.target.value))
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Volume);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(1);

var _ResizeTarget = __webpack_require__(121);

var _ResizeTarget2 = _interopRequireDefault(_ResizeTarget);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mapStateToProps = state => ({
  currentSize: (0, _selectors.getWindowSize)(state, "playlist"),
  id: "playlist-resize-target"
});

const mapDispatchToProps = {
  setWindowSize: size => (0, _actionCreators.setWindowSize)("playlist", size)
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ResizeTarget2.default);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _slicedToArray2 = __webpack_require__(32);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ResizeTarget extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleMouseDown(e) {
    // Prevent dragging from highlighting text.
    e.preventDefault();

    var _props$currentSize = (0, _slicedToArray3.default)(this.props.currentSize, 2);

    const width = _props$currentSize[0],
          height = _props$currentSize[1];

    const mouseStart = {
      x: e.clientX,
      y: e.clientY
    };

    const handleMove = ee => {
      const x = ee.clientX - mouseStart.x;
      const y = ee.clientY - mouseStart.y;

      const newWidth = Math.max(0, width + Math.round(x / _constants.WINDOW_RESIZE_SEGMENT_WIDTH));

      const newHeight = this.props.widthOnly ? width : Math.max(0, height + Math.round(y / _constants.WINDOW_RESIZE_SEGMENT_HEIGHT));

      const newSize = [newWidth, newHeight];

      this.props.setWindowSize(newSize);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", handleMove);
    });
  }

  render() {
    /* eslint-disable no-unused-vars */
    var _props = this.props;
    const currentSize = _props.currentSize,
          setWindowSize = _props.setWindowSize,
          widthOnly = _props.widthOnly,
          passThroughProps = (0, _objectWithoutProperties3.default)(_props, ["currentSize", "setWindowSize", "widthOnly"]);
    /* eslint-enable no-unused-vars */

    return _react2.default.createElement("div", (0, _extends3.default)({
      ref: node => this.node = node,
      onMouseDown: this.handleMouseDown
    }, passThroughProps));
  }
}

exports.default = ResizeTarget;
ResizeTarget.propTypes = {
  currentSize: _propTypes2.default.arrayOf(_propTypes2.default.number).isRequired,
  setWindowSize: _propTypes2.default.func.isRequired,
  widthOnly: _propTypes2.default.bool
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(76);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(77);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(80);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(81);

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(297);

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(298);

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(126);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {
      (0, _warning2['default'])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      (0, _warning2['default'])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        disabled = _props.disabled;

    if (autoFocus && !disabled) {
      this.focus();
    }
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (utils.isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }

    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();
    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = utils.getKeyboardValueMutator(e);

    if (valueMutator) {
      utils.pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
    var val = utils.ensureValueInRange(v, mergedProps);
    return utils.ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        minimumTrackStyle = _props2.minimumTrackStyle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value);
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      index: 0,
      tabIndex: tabIndex,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      }
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = _react2['default'].createElement(_Track2['default'], {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool,
  autoFocus: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].number
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(281);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(283);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(84);
var hiddenKeys = __webpack_require__(58).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(36);
var createDesc = __webpack_require__(34);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(52);
var has = __webpack_require__(26);
var IE8_DOM_DEFINE = __webpack_require__(83);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _reactDom = __webpack_require__(31);

var _KeyCode = __webpack_require__(306);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, diffs))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case _KeyCode2['default'].UP:
    case _KeyCode2['default'].RIGHT:
      return function (value, props) {
        return value + props.step;
      };

    case _KeyCode2['default'].DOWN:
    case _KeyCode2['default'].LEFT:
      return function (value, props) {
        return value - props.step;
      };

    case _KeyCode2['default'].END:
      return function (value, props) {
        return props.max;
      };
    case _KeyCode2['default'].HOME:
      return function (value, props) {
        return props.min;
      };
    case _KeyCode2['default'].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case _KeyCode2['default'].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}

/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(60);

var _promise2 = _interopRequireDefault(_promise);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(179);

var _store2 = _interopRequireDefault(_store);

var _App = __webpack_require__(237);

var _App2 = _interopRequireDefault(_App);

var _hotkeys = __webpack_require__(326);

var _hotkeys2 = _interopRequireDefault(_hotkeys);

var _media = __webpack_require__(327);

var _media2 = _interopRequireDefault(_media);

var _selectors = __webpack_require__(7);

var _actionCreators = __webpack_require__(2);

var _constants = __webpack_require__(5);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

var _emitter = __webpack_require__(82);

var _emitter2 = _interopRequireDefault(_emitter);

__webpack_require__(329);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return a promise that resolves when the store matches a predicate.
const storeHas = (store, predicate) => new _promise2.default(resolve => {
  if (predicate(store.getState())) {
    resolve();
    return;
  }
  const unsubscribe = store.subscribe(() => {
    if (predicate(store.getState())) {
      resolve();
      unsubscribe();
    }
  });
});

class Winamp {
  static browserIsSupported() {
    const supportsAudioApi = !!(window.AudioContext || window.webkitAudioContext);
    const supportsCanvas = !!window.document.createElement("canvas").getContext;
    const supportsPromises = typeof _promise2.default !== "undefined";
    return supportsAudioApi && supportsCanvas && supportsPromises;
  }

  constructor(options) {
    this._actionEmitter = new _emitter2.default();
    this.options = options;
    var _options = this.options;
    const initialTracks = _options.initialTracks,
          initialSkin = _options.initialSkin,
          avaliableSkins = _options.avaliableSkins,
          availableSkins = _options.availableSkins;
    var _options$enableHotkey = _options.enableHotkeys;
    const enableHotkeys = _options$enableHotkey === undefined ? false : _options$enableHotkey,
          __extraWindows = _options.__extraWindows;


    this.media = new _media2.default();
    this.store = (0, _store2.default)(this.media, this._actionEmitter, this.options.__customMiddlewares, this.options.__initialState);
    this.store.dispatch({
      type: navigator.onLine ? _actionTypes.NETWORK_CONNECTED : _actionTypes.NETWORK_DISCONNECTED
    });

    this.genWindows = [];
    if (__extraWindows) {
      this.genWindows = __extraWindows.map(genWindow => (0, _extends3.default)({
        id: genWindow.id || `${genWindow.title}-${(0, _utils.uniqueId)()}`
      }, genWindow));
    }

    this.genWindows.forEach(genWindow => {
      this.store.dispatch({
        type: _actionTypes.ADD_GEN_WINDOW,
        windowId: genWindow.id,
        title: genWindow.title
      });
    });

    window.addEventListener("online", () => this.store.dispatch({ type: _actionTypes.NETWORK_CONNECTED }));
    window.addEventListener("offline", () => this.store.dispatch({ type: _actionTypes.NETWORK_DISCONNECTED }));

    if (initialSkin) {
      this.store.dispatch((0, _actionCreators.setSkinFromUrl)(initialSkin.url));
    } else {
      this.store.dispatch({ type: _actionTypes.LOADED });
    }

    if (initialTracks) {
      this.appendTracks(initialTracks);
    }

    if (avaliableSkins != null) {
      console.warn("The misspelled option `avaliableSkins` is deprecated. Please use `availableSkins` instead.");
      this.store.dispatch({ type: _actionTypes.SET_AVAILABLE_SKINS, skins: avaliableSkins });
    } else if (availableSkins != null) {
      this.store.dispatch({ type: _actionTypes.SET_AVAILABLE_SKINS, skins: availableSkins });
    }

    const layout = options.__initialWindowLayout;
    if (layout != null) {
      (0, _utils.objectForEach)(layout, (w, windowId) => {
        if (w.size != null) {
          this.store.dispatch((0, _actionCreators.setWindowSize)(windowId, w.size));
        }
      });
      this.store.dispatch({
        type: _actionTypes.UPDATE_WINDOW_POSITIONS,
        positions: (0, _utils.objectMap)(layout, w => w.position)
      });
    }

    if (enableHotkeys) {
      new _hotkeys2.default(this.store.dispatch);
    }
  }

  // Append this array of tracks to the end of the current playlist.
  appendTracks(tracks) {
    const nextIndex = (0, _selectors.getTrackCount)(this.store.getState());
    this.store.dispatch((0, _actionCreators.loadMediaFiles)(tracks, _constants.LOAD_STYLE.BUFFER, nextIndex));
  }

  // Replace any existing tracks with this array of tracks, and begin playing.
  setTracksToPlay(tracks) {
    this.store.dispatch((0, _actionCreators.loadMediaFiles)(tracks, _constants.LOAD_STYLE.PLAY));
  }

  onClose(cb) {
    return this._actionEmitter.on(_actionTypes.CLOSE_WINAMP, cb);
  }

  onMinimize(cb) {
    return this._actionEmitter.on(_actionTypes.MINIMIZE_WINAMP, cb);
  }

  async renderWhenReady(node) {
    // Wait for the skin to load.
    await storeHas(this.store, state => !state.display.loading);

    const genWindowComponents = {};
    this.genWindows.forEach(w => {
      genWindowComponents[w.id] = w.Component;
    });

    (0, _reactDom.render)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: this.store },
      _react2.default.createElement(_App2.default, {
        media: this.media,
        container: this.options.container,
        filePickers: this.options.filePickers,
        genWindowComponents: genWindowComponents
      })
    ), node);
  }
}

exports.default = Winamp;

module.exports = Winamp;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(131) });


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(28);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(36);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(53);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(25)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(133);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(55);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(29);
__webpack_require__(39);
__webpack_require__(141);
__webpack_require__(144);
__webpack_require__(145);
module.exports = __webpack_require__(8).Promise;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(55);
var defined = __webpack_require__(54);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(46);
var descriptor = __webpack_require__(34);
var setToStringTag = __webpack_require__(38);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(21)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(28);

module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(26);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(56)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(140);
var step = __webpack_require__(87);
var Iterators = __webpack_require__(30);
var toIObject = __webpack_require__(27);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(62)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(45);
var global = __webpack_require__(13);
var ctx = __webpack_require__(18);
var classof = __webpack_require__(47);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(33);
var anInstance = __webpack_require__(63);
var forOf = __webpack_require__(40);
var speciesConstructor = __webpack_require__(90);
var task = __webpack_require__(91).set;
var microtask = __webpack_require__(143)();
var newPromiseCapabilityModule = __webpack_require__(65);
var perform = __webpack_require__(92);
var promiseResolve = __webpack_require__(93);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(11)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(66)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(38)($Promise, PROMISE);
__webpack_require__(94)(PROMISE);
Wrapper = __webpack_require__(8)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(95)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 142 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(13);
var macrotask = __webpack_require__(91).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(35)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(10);
var core = __webpack_require__(8);
var global = __webpack_require__(13);
var speciesConstructor = __webpack_require__(90);
var promiseResolve = __webpack_require__(93);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(10);
var newPromiseCapability = __webpack_require__(65);
var perform = __webpack_require__(92);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(67),n=__webpack_require__(96),p=__webpack_require__(97),q=__webpack_require__(68),r="function"===typeof Symbol&&Symbol["for"],t=r?Symbol["for"]("react.element"):60103,u=r?Symbol["for"]("react.portal"):60106,v=r?Symbol["for"]("react.fragment"):60107,w=r?Symbol["for"]("react.strict_mode"):60108,x=r?Symbol["for"]("react.provider"):60109,y=r?Symbol["for"]("react.context"):60110,z=r?Symbol["for"]("react.async_mode"):60111,A=r?Symbol["for"]("react.forward_ref"):
60112,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b=arguments.length-1,e="http://reactjs.org/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};
function E(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||D}var H=G.prototype=new F;
H.constructor=G;m(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J=Object.prototype.hasOwnProperty,K={key:!0,ref:!0,__self:!0,__source:!0};
function L(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var k=Array(f),l=0;l<f;l++)k[l]=arguments[l+2];d.children=k}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:I.current}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g,O=[];function P(a,b,e,c){if(O.length){var d=O.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function Q(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>O.length&&O.push(a)}
function R(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+S(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+S(d,h);g+=R(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+S(d,h++),g+=R(d,f,e,c);else"object"===d&&(e=""+a,C("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function S(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function T(a,b){a.func.call(a.context,b,a.count++)}
function U(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,e,q.thatReturnsArgument):null!=a&&(M(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(N,"$\x26/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function V(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(N,"$\x26/")+"/");b=P(b,g,c,d);null==a||R(a,"",U,b);Q(b)}
var W={Children:{map:function(a,b,e){if(null==a)return a;var c=[];V(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=P(null,null,b,e);null==a||R(a,"",T,b);Q(b)},count:function(a){return null==a?0:R(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];V(a,b,null,q.thatReturnsArgument);return b},only:function(a){M(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:y,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_changedBits:0,Provider:null,Consumer:null};a.Provider={$$typeof:x,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:A,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:z,createElement:L,cloneElement:function(a,b,e){null===a||void 0===a?C("267",a):void 0;var c=void 0,d=m({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=I.current);void 0!==b.key&&(g=""+b.key);var k=void 0;a.type&&a.type.defaultProps&&
(k=a.type.defaultProps);for(c in b)J.call(b,c)&&!K.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==k?k[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){k=Array(c);for(var l=0;l<c;l++)k[l]=arguments[l+2];d.children=k}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=L.bind(null,a);b.type=a;return b},isValidElement:M,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:I,assign:m}},X=Object.freeze({default:W}),
Y=X&&W||X;module.exports=Y["default"]?Y["default"]:Y;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.3.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var ba=__webpack_require__(0),m=__webpack_require__(148),A=__webpack_require__(67),C=__webpack_require__(68),ea=__webpack_require__(149),fa=__webpack_require__(150),ha=__webpack_require__(151),ja=__webpack_require__(97);
function D(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}ba?void 0:D("227");
function ka(a,b,c,d,e,f,h,g,k){this._hasCaughtError=!1;this._caughtError=null;var v=Array.prototype.slice.call(arguments,3);try{b.apply(c,v)}catch(l){this._caughtError=l,this._hasCaughtError=!0}}
var E={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,invokeGuardedCallback:function(a,b,c,d,e,f,h,g,k){ka.apply(E,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,h,g,k){E.invokeGuardedCallback.apply(this,arguments);if(E.hasCaughtError()){var v=E.clearCaughtError();E._hasRethrowError||(E._hasRethrowError=!0,E._rethrowError=v)}},rethrowCaughtError:function(){return ma.apply(E,arguments)},hasCaughtError:function(){return E._hasCaughtError},clearCaughtError:function(){if(E._hasCaughtError){var a=
E._caughtError;E._caughtError=null;E._hasCaughtError=!1;return a}D("198")}};function ma(){if(E._hasRethrowError){var a=E._rethrowError;E._rethrowError=null;E._hasRethrowError=!1;throw a;}}var na=null,oa={};
function pa(){if(na)for(var a in oa){var b=oa[a],c=na.indexOf(a);-1<c?void 0:D("96",a);if(!qa[c]){b.extractEvents?void 0:D("97",a);qa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],h=b,g=d;ra.hasOwnProperty(g)?D("99",g):void 0;ra[g]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&sa(k[e],h,g);e=!0}else f.registrationName?(sa(f.registrationName,h,g),e=!0):e=!1;e?void 0:D("98",d,a)}}}}
function sa(a,b,c){ta[a]?D("100",a):void 0;ta[a]=b;ua[a]=b.eventTypes[c].dependencies}var qa=[],ra={},ta={},ua={};function va(a){na?D("101"):void 0;na=Array.prototype.slice.call(a);pa()}function wa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];oa.hasOwnProperty(c)&&oa[c]===d||(oa[c]?D("102",c):void 0,oa[c]=d,b=!0)}b&&pa()}
var xa=Object.freeze({plugins:qa,eventNameDispatchConfigs:ra,registrationNameModules:ta,registrationNameDependencies:ua,possibleRegistrationNames:null,injectEventPluginOrder:va,injectEventPluginsByName:wa}),Ca=null,Da=null,Ea=null;function Fa(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=Ea(d);E.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
function Ga(a,b){null==b?D("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Ha(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ia=null;
function Ja(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)Fa(a,b,c[e],d[e]);else c&&Fa(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ka(a){return Ja(a,!0)}function La(a){return Ja(a,!1)}var Ma={injectEventPluginOrder:va,injectEventPluginsByName:wa};
function Na(a,b){var c=a.stateNode;if(!c)return null;var d=Ca(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?D("231",b,typeof c):void 0;
return c}function Oa(a,b){null!==a&&(Ia=Ga(Ia,a));a=Ia;Ia=null;a&&(b?Ha(a,Ka):Ha(a,La),Ia?D("95"):void 0,E.rethrowCaughtError())}function Pa(a,b,c,d){for(var e=null,f=0;f<qa.length;f++){var h=qa[f];h&&(h=h.extractEvents(a,b,c,d))&&(e=Ga(e,h))}Oa(e,!1)}var Qa=Object.freeze({injection:Ma,getListener:Na,runEventsInBatch:Oa,runExtractedEventsInBatch:Pa}),Ra=Math.random().toString(36).slice(2),F="__reactInternalInstance$"+Ra,Sa="__reactEventHandlers$"+Ra;
function Ta(a){if(a[F])return a[F];for(;!a[F];)if(a.parentNode)a=a.parentNode;else return null;a=a[F];return 5===a.tag||6===a.tag?a:null}function Ua(a){if(5===a.tag||6===a.tag)return a.stateNode;D("33")}function Va(a){return a[Sa]||null}var ab=Object.freeze({precacheFiberNode:function(a,b){b[F]=a},getClosestInstanceFromNode:Ta,getInstanceFromNode:function(a){a=a[F];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:Ua,getFiberCurrentPropsFromNode:Va,updateFiberProps:function(a,b){a[Sa]=b}});
function L(a){do a=a["return"];while(a&&5!==a.tag);return a?a:null}function bb(a,b,c){for(var d=[];a;)d.push(a),a=L(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}function cb(a,b,c){if(b=Na(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Ga(c._dispatchListeners,b),c._dispatchInstances=Ga(c._dispatchInstances,a)}function db(a){a&&a.dispatchConfig.phasedRegistrationNames&&bb(a._targetInst,cb,a)}
function eb(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?L(b):null;bb(b,cb,a)}}function fb(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Na(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Ga(c._dispatchListeners,b),c._dispatchInstances=Ga(c._dispatchInstances,a))}function gb(a){a&&a.dispatchConfig.registrationName&&fb(a._targetInst,null,a)}function hb(a){Ha(a,db)}
function ib(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,h=0,g=e;g;g=L(g))h++;g=0;for(var k=f;k;k=L(k))g++;for(;0<h-g;)e=L(e),h--;for(;0<g-h;)f=L(f),g--;for(;h--;){if(e===f||e===f.alternate)break a;e=L(e);f=L(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){h=c.alternate;if(null!==h&&h===f)break;e.push(c);c=L(c)}for(c=[];d&&d!==f;){h=d.alternate;if(null!==h&&h===f)break;c.push(d);d=L(d)}for(d=0;d<e.length;d++)fb(e[d],"bubbled",a);for(a=c.length;0<a--;)fb(c[a],"captured",b)}
var jb=Object.freeze({accumulateTwoPhaseDispatches:hb,accumulateTwoPhaseDispatchesSkipTarget:function(a){Ha(a,eb)},accumulateEnterLeaveDispatches:ib,accumulateDirectDispatches:function(a){Ha(a,gb)}}),kb=null;function lb(){!kb&&m.canUseDOM&&(kb="textContent"in document.documentElement?"textContent":"innerText");return kb}var M={_root:null,_startText:null,_fallbackText:null};
function mb(){if(M._fallbackText)return M._fallbackText;var a,b=M._startText,c=b.length,d,e=nb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var h=c-a;for(d=1;d<=h&&b[c-d]===e[f-d];d++);M._fallbackText=e.slice(a,1<d?1-d:void 0);return M._fallbackText}function nb(){return"value"in M._root?M._root.value:M._root[lb()]}
var ob="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),pb={type:null,target:null,currentTarget:C.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
function N(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?C.thatReturnsTrue:C.thatReturnsFalse;this.isPropagationStopped=C.thatReturnsFalse;return this}
A(N.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=C.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=C.thatReturnsTrue)},persist:function(){this.isPersistent=C.thatReturnsTrue},isPersistent:C.thatReturnsFalse,
destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<ob.length;a++)this[ob[a]]=null}});N.Interface=pb;N.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;A(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=A({},d.Interface,a);c.extend=d.extend;qb(c);return c};qb(N);
function rb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function sb(a){a instanceof this?void 0:D("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function qb(a){a.eventPool=[];a.getPooled=rb;a.release=sb}var tb=N.extend({data:null}),ub=N.extend({data:null}),vb=[9,13,27,32],wb=m.canUseDOM&&"CompositionEvent"in window,xb=null;m.canUseDOM&&"documentMode"in document&&(xb=document.documentMode);
var yb=m.canUseDOM&&"TextEvent"in window&&!xb,zb=m.canUseDOM&&(!wb||xb&&8<xb&&11>=xb),Ab=String.fromCharCode(32),Eb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},Kb=!1;
function Lb(a,b){switch(a){case "topKeyUp":return-1!==vb.indexOf(b.keyCode);case "topKeyDown":return 229!==b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":return!0;default:return!1}}function Mb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Nb=!1;function Ob(a,b){switch(a){case "topCompositionEnd":return Mb(b);case "topKeyPress":if(32!==b.which)return null;Kb=!0;return Ab;case "topTextInput":return a=b.data,a===Ab&&Kb?null:a;default:return null}}
function Pb(a,b){if(Nb)return"topCompositionEnd"===a||!wb&&Lb(a,b)?(a=mb(),M._root=null,M._startText=null,M._fallbackText=null,Nb=!1,a):null;switch(a){case "topPaste":return null;case "topKeyPress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "topCompositionEnd":return zb?null:b.data;default:return null}}
var Qb={eventTypes:Eb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(wb)b:{switch(a){case "topCompositionStart":e=Eb.compositionStart;break b;case "topCompositionEnd":e=Eb.compositionEnd;break b;case "topCompositionUpdate":e=Eb.compositionUpdate;break b}e=void 0}else Nb?Lb(a,c)&&(e=Eb.compositionEnd):"topKeyDown"===a&&229===c.keyCode&&(e=Eb.compositionStart);e?(zb&&(Nb||e!==Eb.compositionStart?e===Eb.compositionEnd&&Nb&&(f=mb()):(M._root=d,M._startText=nb(),Nb=!0)),e=tb.getPooled(e,
b,c,d),f?e.data=f:(f=Mb(c),null!==f&&(e.data=f)),hb(e),f=e):f=null;(a=yb?Ob(a,c):Pb(a,c))?(b=ub.getPooled(Eb.beforeInput,b,c,d),b.data=a,hb(b)):b=null;return null===f?b:null===b?f:[f,b]}},Rb=null,Sb=null,Tb=null;function Ub(a){if(a=Da(a)){Rb&&"function"===typeof Rb.restoreControlledState?void 0:D("194");var b=Ca(a.stateNode);Rb.restoreControlledState(a.stateNode,a.type,b)}}var Vb={injectFiberControlledHostComponent:function(a){Rb=a}};function Wb(a){Sb?Tb?Tb.push(a):Tb=[a]:Sb=a}
function Xb(){return null!==Sb||null!==Tb}function Yb(){if(Sb){var a=Sb,b=Tb;Tb=Sb=null;Ub(a);if(b)for(a=0;a<b.length;a++)Ub(b[a])}}var Zb=Object.freeze({injection:Vb,enqueueStateRestore:Wb,needsStateRestore:Xb,restoreStateIfNeeded:Yb});function $b(a,b){return a(b)}function ac(a,b,c){return a(b,c)}function bc(){}var cc=!1;function dc(a,b){if(cc)return a(b);cc=!0;try{return $b(a,b)}finally{cc=!1,Xb()&&(bc(),Yb())}}
var ec={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!ec[a.type]:"textarea"===b?!0:!1}function gc(a){a=a.target||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}
function hc(a,b){if(!m.canUseDOM||b&&!("addEventListener"in document))return!1;a="on"+a;b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function ic(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function jc(a){var b=ic(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"function"===typeof c.get&&"function"===typeof c.set)return Object.defineProperty(a,b,{configurable:!0,get:function(){return c.get.call(this)},set:function(a){d=""+a;c.set.call(this,a)}}),Object.defineProperty(a,b,{enumerable:c.enumerable}),{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}
function kc(a){a._valueTracker||(a._valueTracker=jc(a))}function lc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ic(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var mc=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O="function"===typeof Symbol&&Symbol["for"],nc=O?Symbol["for"]("react.element"):60103,oc=O?Symbol["for"]("react.call"):60104,pc=O?Symbol["for"]("react.return"):60105,qc=O?Symbol["for"]("react.portal"):60106,rc=O?Symbol["for"]("react.fragment"):60107,sc=O?Symbol["for"]("react.strict_mode"):60108,tc=O?Symbol["for"]("react.provider"):60109,uc=O?Symbol["for"]("react.context"):60110,vc=O?Symbol["for"]("react.async_mode"):60111,
wc=O?Symbol["for"]("react.forward_ref"):60112,xc="function"===typeof Symbol&&Symbol.iterator;function yc(a){if(null===a||"undefined"===typeof a)return null;a=xc&&a[xc]||a["@@iterator"];return"function"===typeof a?a:null}function zc(a){a=a.type;if("function"===typeof a)return a.displayName||a.name;if("string"===typeof a)return a;switch(a){case rc:return"ReactFragment";case qc:return"ReactPortal";case oc:return"ReactCall";case pc:return"ReactReturn"}return null}
function Ac(a){var b="";do{a:switch(a.tag){case 0:case 1:case 2:case 5:var c=a._debugOwner,d=a._debugSource;var e=zc(a);var f=null;c&&(f=zc(c));c=d;e="\n    in "+(e||"Unknown")+(c?" (at "+c.fileName.replace(/^.*[\\\/]/,"")+":"+c.lineNumber+")":f?" (created by "+f+")":"");break a;default:e=""}b+=e;a=a["return"]}while(a);return b}
var Bc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cc={},Dc={};function Ec(a){if(Dc.hasOwnProperty(a))return!0;if(Cc.hasOwnProperty(a))return!1;if(Bc.test(a))return Dc[a]=!0;Cc[a]=!0;return!1}
function Fc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function Gc(a,b,c,d){if(null===b||"undefined"===typeof b||Fc(a,b,c,d))return!0;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}
function U(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){V[a]=new U(a,0,!1,a,null)});
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];V[b]=new U(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){V[a]=new U(a,2,!1,a.toLowerCase(),null)});["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){V[a]=new U(a,2,!1,a,null)});
"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){V[a]=new U(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){V[a]=new U(a,3,!0,a.toLowerCase(),null)});["capture","download"].forEach(function(a){V[a]=new U(a,4,!1,a.toLowerCase(),null)});
["cols","rows","size","span"].forEach(function(a){V[a]=new U(a,6,!1,a.toLowerCase(),null)});["rowSpan","start"].forEach(function(a){V[a]=new U(a,5,!1,a.toLowerCase(),null)});var Hc=/[\-\:]([a-z])/g;function Sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Hc,
Sc);V[b]=new U(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Hc,Sc);V[b]=new U(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Hc,Sc);V[b]=new U(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});V.tabIndex=new U("tabIndex",1,!1,"tabindex",null);
function Tc(a,b,c,d){var e=V.hasOwnProperty(b)?V[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Gc(b,c,e,d)&&(c=null),d||null===e?Ec(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Uc(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Vc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Wc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Xc(a,b){b=b.checked;null!=b&&Tc(a,"checked",b,!1)}
function Yc(a,b){Xc(a,b);var c=Wc(b.value);if(null!=c)if("number"===b.type){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);b.hasOwnProperty("value")?Zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Zc(a,b.type,Wc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function $c(a,b){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue"))""===a.value&&(a.value=""+a._wrapperState.initialValue),a.defaultValue=""+a._wrapperState.initialValue;b=a.name;""!==b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&(a.name=b)}function Zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}
function Wc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}var ad={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}};function bd(a,b,c){a=N.getPooled(ad.change,a,b,c);a.type="change";Wb(c);hb(a);return a}var cd=null,dd=null;function ed(a){Oa(a,!1)}
function fd(a){var b=Ua(a);if(lc(b))return a}function gd(a,b){if("topChange"===a)return b}var hd=!1;m.canUseDOM&&(hd=hc("input")&&(!document.documentMode||9<document.documentMode));function id(){cd&&(cd.detachEvent("onpropertychange",jd),dd=cd=null)}function jd(a){"value"===a.propertyName&&fd(dd)&&(a=bd(dd,a,gc(a)),dc(ed,a))}function kd(a,b,c){"topFocus"===a?(id(),cd=b,dd=c,cd.attachEvent("onpropertychange",jd)):"topBlur"===a&&id()}
function ld(a){if("topSelectionChange"===a||"topKeyUp"===a||"topKeyDown"===a)return fd(dd)}function md(a,b){if("topClick"===a)return fd(b)}function nd(a,b){if("topInput"===a||"topChange"===a)return fd(b)}
var od={eventTypes:ad,_isInputEventSupported:hd,extractEvents:function(a,b,c,d){var e=b?Ua(b):window,f=void 0,h=void 0,g=e.nodeName&&e.nodeName.toLowerCase();"select"===g||"input"===g&&"file"===e.type?f=gd:fc(e)?hd?f=nd:(f=ld,h=kd):(g=e.nodeName,!g||"input"!==g.toLowerCase()||"checkbox"!==e.type&&"radio"!==e.type||(f=md));if(f&&(f=f(a,b)))return bd(f,c,d);h&&h(a,e,b);"topBlur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&Zc(e,"number",e.value)}},pd=N.extend({view:null,
detail:null}),qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=qd[a])?!!b[a]:!1}function sd(){return rd}
var td=pd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:sd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}}),ud={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},vd={eventTypes:ud,extractEvents:function(a,
b,c,d){if("topMouseOver"===a&&(c.relatedTarget||c.fromElement)||"topMouseOut"!==a&&"topMouseOver"!==a)return null;var e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;"topMouseOut"===a?(a=b,b=(b=c.relatedTarget||c.toElement)?Ta(b):null):a=null;if(a===b)return null;var f=null==a?e:Ua(a);e=null==b?e:Ua(b);var h=td.getPooled(ud.mouseLeave,a,c,d);h.type="mouseleave";h.target=f;h.relatedTarget=e;c=td.getPooled(ud.mouseEnter,b,c,d);c.type="mouseenter";c.target=e;c.relatedTarget=
f;ib(h,c,a,b);return[h,c]}};function wd(a){var b=a;if(a.alternate)for(;b["return"];)b=b["return"];else{if(0!==(b.effectTag&2))return 1;for(;b["return"];)if(b=b["return"],0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function xd(a){return(a=a._reactInternalFiber)?2===wd(a):!1}function yd(a){2!==wd(a)?D("188"):void 0}
function zd(a){var b=a.alternate;if(!b)return b=wd(a),3===b?D("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c["return"],f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var h=e.child;h;){if(h===c)return yd(e),a;if(h===d)return yd(e),b;h=h.sibling}D("188")}if(c["return"]!==d["return"])c=e,d=f;else{h=!1;for(var g=e.child;g;){if(g===c){h=!0;c=e;d=f;break}if(g===d){h=!0;d=e;c=f;break}g=g.sibling}if(!h){for(g=f.child;g;){if(g===c){h=!0;c=f;d=e;break}if(g===d){h=!0;d=f;c=e;break}g=g.sibling}h?
void 0:D("189")}}c.alternate!==d?D("190"):void 0}3!==c.tag?D("188"):void 0;return c.stateNode.current===c?a:b}function Ad(a){a=zd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}
function Bd(a){a=zd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}var Cd=N.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Dd=N.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Ed=pd.extend({relatedTarget:null});
function Fd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id=pd.extend({key:function(a){if(a.key){var b=Gd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Fd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Hd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:sd,charCode:function(a){return"keypress"===
a.type?Fd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?Fd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Jd=td.extend({dataTransfer:null}),Kd=pd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:sd}),Ld=N.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Md=td.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Nd={},Od={};function Pd(a,b){var c=a[0].toUpperCase()+a.slice(1),d="on"+c;c="top"+c;b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Nd[a]=b;Od[c]=b}
"blur cancel click close contextMenu copy cut doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play rateChange reset seeked submit touchCancel touchEnd touchStart volumeChange".split(" ").forEach(function(a){Pd(a,!0)});
"abort animationEnd animationIteration animationStart canPlay canPlayThrough drag dragEnter dragExit dragLeave dragOver durationChange emptied encrypted ended error load loadedData loadedMetadata loadStart mouseMove mouseOut mouseOver playing progress scroll seeking stalled suspend timeUpdate toggle touchMove transitionEnd waiting wheel".split(" ").forEach(function(a){Pd(a,!1)});
var Qd={eventTypes:Nd,isInteractiveTopLevelEventType:function(a){a=Od[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Od[a];if(!e)return null;switch(a){case "topKeyPress":if(0===Fd(c))return null;case "topKeyDown":case "topKeyUp":a=Id;break;case "topBlur":case "topFocus":a=Ed;break;case "topClick":if(2===c.button)return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":a=
td;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":a=Jd;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":a=Kd;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":a=Cd;break;case "topTransitionEnd":a=Ld;break;case "topScroll":a=pd;break;case "topWheel":a=Md;break;case "topCopy":case "topCut":case "topPaste":a=Dd;break;default:a=
N}b=a.getPooled(e,b,c,d);hb(b);return b}},Rd=Qd.isInteractiveTopLevelEventType,Sd=[];function Td(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c["return"];)c=c["return"];c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=Ta(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],Pa(a.topLevelType,b,a.nativeEvent,gc(a.nativeEvent))}var Ud=!0;function Vd(a){Ud=!!a}
function W(a,b,c){if(!c)return null;a=(Rd(a)?Wd:Xd).bind(null,a);c.addEventListener(b,a,!1)}function Yd(a,b,c){if(!c)return null;a=(Rd(a)?Wd:Xd).bind(null,a);c.addEventListener(b,a,!0)}function Wd(a,b){ac(Xd,a,b)}
function Xd(a,b){if(Ud){var c=gc(b);c=Ta(c);null!==c&&"number"===typeof c.tag&&2!==wd(c)&&(c=null);if(Sd.length){var d=Sd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{dc(Td,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Sd.length&&Sd.push(a)}}}
var Zd=Object.freeze({get _enabled(){return Ud},setEnabled:Vd,isEnabled:function(){return Ud},trapBubbledEvent:W,trapCapturedEvent:Yd,dispatchEvent:Xd});function $d(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
var ae={animationend:$d("Animation","AnimationEnd"),animationiteration:$d("Animation","AnimationIteration"),animationstart:$d("Animation","AnimationStart"),transitionend:$d("Transition","TransitionEnd")},be={},ce={};m.canUseDOM&&(ce=document.createElement("div").style,"AnimationEvent"in window||(delete ae.animationend.animation,delete ae.animationiteration.animation,delete ae.animationstart.animation),"TransitionEvent"in window||delete ae.transitionend.transition);
function de(a){if(be[a])return be[a];if(!ae[a])return a;var b=ae[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ce)return be[a]=b[c];return a}
var ee={topAnimationEnd:de("animationend"),topAnimationIteration:de("animationiteration"),topAnimationStart:de("animationstart"),topBlur:"blur",topCancel:"cancel",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",
topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoad:"load",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",
topTouchStart:"touchstart",topTransitionEnd:de("transitionend"),topWheel:"wheel"},fe={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",
topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},ge={},he=0,ie="_reactListenersID"+(""+Math.random()).slice(2);function je(a){Object.prototype.hasOwnProperty.call(a,ie)||(a[ie]=he++,ge[a[ie]]={});return ge[a[ie]]}function ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function le(a,b){var c=ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ke(c)}}function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)}
var ne=m.canUseDOM&&"documentMode"in document&&11>=document.documentMode,oe={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},pe=null,qe=null,re=null,se=!1;
function ue(a,b){if(se||null==pe||pe!==ea())return null;var c=pe;"selectionStart"in c&&me(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return re&&fa(re,c)?null:(re=c,a=N.getPooled(oe.select,qe,a,b),a.type="select",a.target=pe,hb(a),a)}
var we={eventTypes:oe,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=je(e);f=ua.onSelect;for(var h=0;h<f.length;h++){var g=f[h];if(!e.hasOwnProperty(g)||!e[g]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ua(b):window;switch(a){case "topFocus":if(fc(e)||"true"===e.contentEditable)pe=e,qe=b,re=null;break;case "topBlur":re=qe=pe=null;break;case "topMouseDown":se=!0;break;case "topContextMenu":case "topMouseUp":return se=!1,ue(c,d);case "topSelectionChange":if(ne)break;
case "topKeyDown":case "topKeyUp":return ue(c,d)}return null}};Ma.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));Ca=ab.getFiberCurrentPropsFromNode;Da=ab.getInstanceFromNode;Ea=ab.getNodeFromInstance;Ma.injectEventPluginsByName({SimpleEventPlugin:Qd,EnterLeaveEventPlugin:vd,ChangeEventPlugin:od,SelectEventPlugin:we,BeforeInputEventPlugin:Qb});
function xe(a,b,c,d){this.tag=a;this.key=c;this.stateNode=this.type=null;this.sibling=this.child=this["return"]=null;this.index=0;this.ref=null;this.pendingProps=b;this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
function ye(a,b,c){var d=a.alternate;null===d?(d=new xe(a.tag,b,a.key,a.mode),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=b,d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
function ze(a,b,c){var d=a.type,e=a.key;a=a.props;var f=void 0;if("function"===typeof d)f=d.prototype&&d.prototype.isReactComponent?2:0;else if("string"===typeof d)f=5;else switch(d){case rc:return Ae(a.children,b,c,e);case vc:f=11;b|=3;break;case sc:f=11;b|=2;break;case oc:f=7;break;case pc:f=9;break;default:if("object"===typeof d&&null!==d)switch(d.$$typeof){case tc:f=13;break;case uc:f=12;break;case wc:f=14;break;default:if("number"===typeof d.tag)return b=d,b.pendingProps=a,b.expirationTime=c,
b;D("130",null==d?d:typeof d,"")}else D("130",null==d?d:typeof d,"")}b=new xe(f,a,e,b);b.type=d;b.expirationTime=c;return b}function Ae(a,b,c,d){a=new xe(10,a,d,b);a.expirationTime=c;return a}function Be(a,b,c){a=new xe(6,a,null,b);a.expirationTime=c;return a}function Ce(a,b,c){b=new xe(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}var De=null,Ee=null;
function Fe(a){return function(b){try{return a(b)}catch(c){}}}function Ge(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);De=Fe(function(a){return b.onCommitFiberRoot(c,a)});Ee=Fe(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function He(a){"function"===typeof De&&De(a)}function Ie(a){"function"===typeof Ee&&Ee(a)}new Set;
function Je(a){return{baseState:a,expirationTime:0,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1,capturedValues:null}}function Ke(a,b){null===a.last?a.first=a.last=b:(a.last.next=b,a.last=b);if(0===a.expirationTime||a.expirationTime>b.expirationTime)a.expirationTime=b.expirationTime}var Le=void 0,Me=void 0;
function Ne(a){Le=Me=null;var b=a.alternate,c=a.updateQueue;null===c&&(c=a.updateQueue=Je(null));null!==b?(a=b.updateQueue,null===a&&(a=b.updateQueue=Je(null))):a=null;Le=c;Me=a!==c?a:null}function Oe(a,b){Ne(a);a=Le;var c=Me;null===c?Ke(a,b):null===a.last||null===c.last?(Ke(a,b),Ke(c,b)):(Ke(a,b),c.last=b)}function Pe(a,b,c,d){a=a.partialState;return"function"===typeof a?a.call(b,c,d):a}
function Qe(a,b,c,d,e,f){null!==a&&a.updateQueue===c&&(c=b.updateQueue={baseState:c.baseState,expirationTime:c.expirationTime,first:c.first,last:c.last,isInitialized:c.isInitialized,capturedValues:c.capturedValues,callbackList:null,hasForceUpdate:!1});c.expirationTime=0;c.isInitialized?a=c.baseState:(a=c.baseState=b.memoizedState,c.isInitialized=!0);for(var h=!0,g=c.first,k=!1;null!==g;){var v=g.expirationTime;if(v>f){var l=c.expirationTime;if(0===l||l>v)c.expirationTime=v;k||(k=!0,c.baseState=a)}else{k||
(c.first=g.next,null===c.first&&(c.last=null));if(g.isReplace)a=Pe(g,d,a,e),h=!0;else if(v=Pe(g,d,a,e))a=h?A({},a,v):A(a,v),h=!1;g.isForced&&(c.hasForceUpdate=!0);null!==g.callback&&(v=c.callbackList,null===v&&(v=c.callbackList=[]),v.push(g));null!==g.capturedValue&&(v=c.capturedValues,null===v?c.capturedValues=[g.capturedValue]:v.push(g.capturedValue))}g=g.next}null!==c.callbackList?b.effectTag|=32:null!==c.first||c.hasForceUpdate||null!==c.capturedValues||(b.updateQueue=null);k||(c.baseState=a);
return a}function Re(a,b){var c=a.callbackList;if(null!==c)for(a.callbackList=null,a=0;a<c.length;a++){var d=c[a],e=d.callback;d.callback=null;"function"!==typeof e?D("191",e):void 0;e.call(b)}}
function Se(a,b,c,d,e){function f(a,b,c,d,e,f){if(null===b||null!==a.updateQueue&&a.updateQueue.hasForceUpdate)return!0;var n=a.stateNode;a=a.type;return"function"===typeof n.shouldComponentUpdate?n.shouldComponentUpdate(c,e,f):a.prototype&&a.prototype.isPureReactComponent?!fa(b,c)||!fa(d,e):!0}function h(a,b){b.updater=r;a.stateNode=b;b._reactInternalFiber=a}function g(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&
b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&r.enqueueReplaceState(b,b.state,null)}function k(a,b,c,d){a=a.type;if("function"===typeof a.getDerivedStateFromProps)return a.getDerivedStateFromProps.call(null,c,d)}var v=a.cacheContext,l=a.getMaskedContext,p=a.getUnmaskedContext,y=a.isContextConsumer,B=a.hasContextChanged,r={isMounted:xd,enqueueSetState:function(a,d,e){a=a._reactInternalFiber;e=void 0===e?null:e;var f=c(a);Oe(a,{expirationTime:f,partialState:d,callback:e,isReplace:!1,isForced:!1,
capturedValue:null,next:null});b(a,f)},enqueueReplaceState:function(a,d,e){a=a._reactInternalFiber;e=void 0===e?null:e;var f=c(a);Oe(a,{expirationTime:f,partialState:d,callback:e,isReplace:!0,isForced:!1,capturedValue:null,next:null});b(a,f)},enqueueForceUpdate:function(a,d){a=a._reactInternalFiber;d=void 0===d?null:d;var e=c(a);Oe(a,{expirationTime:e,partialState:null,callback:d,isReplace:!1,isForced:!0,capturedValue:null,next:null});b(a,e)}};return{adoptClassInstance:h,callGetDerivedStateFromProps:k,
constructClassInstance:function(a,b){var c=a.type,d=p(a),e=y(a),f=e?l(a,d):ja;c=new c(b,f);var n=null!==c.state&&void 0!==c.state?c.state:null;h(a,c);a.memoizedState=n;b=k(a,c,b,n);null!==b&&void 0!==b&&(a.memoizedState=A({},a.memoizedState,b));e&&v(a,d,f);return c},mountClassInstance:function(a,b){var c=a.type,d=a.alternate,e=a.stateNode,f=a.pendingProps,n=p(a);e.props=f;e.state=a.memoizedState;e.refs=ja;e.context=l(a,n);"function"===typeof c.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||
"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(c=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),c!==e.state&&r.enqueueReplaceState(e,e.state,null),c=a.updateQueue,null!==c&&(e.state=Qe(d,a,c,e,f,b)));"function"===typeof e.componentDidMount&&(a.effectTag|=4)},resumeMountClassInstance:function(a,b){var c=a.type,n=a.stateNode;n.props=a.memoizedProps;n.state=
a.memoizedState;var h=a.memoizedProps,r=a.pendingProps,y=n.context,q=p(a);q=l(a,q);(c="function"===typeof c.getDerivedStateFromProps||"function"===typeof n.getSnapshotBeforeUpdate)||"function"!==typeof n.UNSAFE_componentWillReceiveProps&&"function"!==typeof n.componentWillReceiveProps||(h!==r||y!==q)&&g(a,n,r,q);y=a.memoizedState;b=null!==a.updateQueue?Qe(null,a,a.updateQueue,n,r,b):y;var t=void 0;h!==r&&(t=k(a,n,r,b));null!==t&&void 0!==t&&(b=null===b||void 0===b?t:A({},b,t));if(!(h!==r||y!==b||
B()||null!==a.updateQueue&&a.updateQueue.hasForceUpdate))return"function"===typeof n.componentDidMount&&(a.effectTag|=4),!1;(h=f(a,h,r,y,b,q))?(c||"function"!==typeof n.UNSAFE_componentWillMount&&"function"!==typeof n.componentWillMount||("function"===typeof n.componentWillMount&&n.componentWillMount(),"function"===typeof n.UNSAFE_componentWillMount&&n.UNSAFE_componentWillMount()),"function"===typeof n.componentDidMount&&(a.effectTag|=4)):("function"===typeof n.componentDidMount&&(a.effectTag|=4),
d(a,r),e(a,b));n.props=r;n.state=b;n.context=q;return h},updateClassInstance:function(a,b,c){var n=b.type,x=b.stateNode;x.props=b.memoizedProps;x.state=b.memoizedState;var h=b.memoizedProps,r=b.pendingProps,q=x.context,t=p(b);t=l(b,t);(n="function"===typeof n.getDerivedStateFromProps||"function"===typeof x.getSnapshotBeforeUpdate)||"function"!==typeof x.UNSAFE_componentWillReceiveProps&&"function"!==typeof x.componentWillReceiveProps||(h!==r||q!==t)&&g(b,x,r,t);q=b.memoizedState;c=null!==b.updateQueue?
Qe(a,b,b.updateQueue,x,r,c):q;var u=void 0;h!==r&&(u=k(b,x,r,c));null!==u&&void 0!==u&&(c=null===c||void 0===c?u:A({},c,u));if(!(h!==r||q!==c||B()||null!==b.updateQueue&&b.updateQueue.hasForceUpdate))return"function"!==typeof x.componentDidUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.effectTag|=4),"function"!==typeof x.getSnapshotBeforeUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.effectTag|=2048),!1;(u=f(b,h,r,q,c,t))?(n||"function"!==typeof x.UNSAFE_componentWillUpdate&&"function"!==
typeof x.componentWillUpdate||("function"===typeof x.componentWillUpdate&&x.componentWillUpdate(r,c,t),"function"===typeof x.UNSAFE_componentWillUpdate&&x.UNSAFE_componentWillUpdate(r,c,t)),"function"===typeof x.componentDidUpdate&&(b.effectTag|=4),"function"===typeof x.getSnapshotBeforeUpdate&&(b.effectTag|=2048)):("function"!==typeof x.componentDidUpdate||h===a.memoizedProps&&q===a.memoizedState||(b.effectTag|=4),"function"!==typeof x.getSnapshotBeforeUpdate||h===a.memoizedProps&&q===a.memoizedState||
(b.effectTag|=2048),d(b,r),e(b,c));x.props=r;x.state=c;x.context=t;return u}}}var Te=Array.isArray;
function Ue(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(2!==c.tag?D("110"):void 0,d=c.stateNode);d?void 0:D("147",a);var e=""+a;if(null!==b&&null!==b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs===ja?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?D("148"):void 0;c._owner?void 0:D("254",a)}return a}
function Ve(a,b){"textarea"!==a.type&&D("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function We(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=ye(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function h(b){a&&null===b.alternate&&(b.effectTag=2);return b}function g(a,b,c,d){if(null===b||6!==b.tag)return b=Be(c,a.mode,d),b["return"]=a,b;b=e(b,c,d);b["return"]=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Ue(a,b,c),d["return"]=a,d;d=ze(c,a.mode,d);d.ref=Ue(a,b,c);d["return"]=a;return d}function v(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Ce(c,a.mode,d),b["return"]=a,b;b=e(b,c.children||[],d);b["return"]=a;return b}function l(a,b,c,d,f){if(null===b||10!==b.tag)return b=Ae(c,a.mode,d,f),b["return"]=a,b;b=e(b,c,d);b["return"]=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Be(""+b,a.mode,c),b["return"]=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case nc:return c=ze(b,a.mode,c),c.ref=Ue(a,null,b),c["return"]=a,c;case qc:return b=Ce(b,a.mode,c),b["return"]=a,b}if(Te(b)||yc(b))return b=Ae(b,
a.mode,c,null),b["return"]=a,b;Ve(a,b)}return null}function y(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:g(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case nc:return c.key===e?c.type===rc?l(a,b,c.props.children,d,e):k(a,b,c,d):null;case qc:return c.key===e?v(a,b,c,d):null}if(Te(c)||yc(c))return null!==e?null:l(a,b,c,d,null);Ve(a,c)}return null}function B(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,g(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case nc:return a=a.get(null===d.key?c:d.key)||null,d.type===rc?l(b,a,d.props.children,e,d.key):k(b,a,d,e);case qc:return a=a.get(null===d.key?c:d.key)||null,v(b,a,d,e)}if(Te(d)||yc(d))return a=a.get(c)||null,l(b,a,d,e,null);Ve(b,d)}return null}function r(e,g,l,h){for(var r=null,k=null,q=g,t=g=0,u=null;null!==q&&t<l.length;t++){q.index>t?(u=q,q=null):u=q.sibling;var n=y(e,q,l[t],h);if(null===n){null===q&&(q=u);break}a&&q&&null===
n.alternate&&b(e,q);g=f(n,g,t);null===k?r=n:k.sibling=n;k=n;q=u}if(t===l.length)return c(e,q),r;if(null===q){for(;t<l.length;t++)if(q=p(e,l[t],h))g=f(q,g,t),null===k?r=q:k.sibling=q,k=q;return r}for(q=d(e,q);t<l.length;t++)if(u=B(q,e,t,l[t],h)){if(a&&null!==u.alternate)q["delete"](null===u.key?t:u.key);g=f(u,g,t);null===k?r=u:k.sibling=u;k=u}a&&q.forEach(function(a){return b(e,a)});return r}function Q(e,g,l,h){var r=yc(l);"function"!==typeof r?D("150"):void 0;l=r.call(l);null==l?D("151"):void 0;for(var k=
r=null,q=g,t=g=0,u=null,n=l.next();null!==q&&!n.done;t++,n=l.next()){q.index>t?(u=q,q=null):u=q.sibling;var H=y(e,q,n.value,h);if(null===H){q||(q=u);break}a&&q&&null===H.alternate&&b(e,q);g=f(H,g,t);null===k?r=H:k.sibling=H;k=H;q=u}if(n.done)return c(e,q),r;if(null===q){for(;!n.done;t++,n=l.next())n=p(e,n.value,h),null!==n&&(g=f(n,g,t),null===k?r=n:k.sibling=n,k=n);return r}for(q=d(e,q);!n.done;t++,n=l.next())if(n=B(q,e,t,n.value,h),null!==n){if(a&&null!==n.alternate)q["delete"](null===n.key?t:n.key);
g=f(n,g,t);null===k?r=n:k.sibling=n;k=n}a&&q.forEach(function(a){return b(e,a)});return r}return function(a,d,f,g){"object"===typeof f&&null!==f&&f.type===rc&&null===f.key&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case nc:a:{var k=f.key;for(l=d;null!==l;){if(l.key===k)if(10===l.tag?f.type===rc:l.type===f.type){c(a,l.sibling);d=e(l,f.type===rc?f.props.children:f.props,g);d.ref=Ue(a,l,f);d["return"]=a;a=d;break a}else{c(a,l);break}else b(a,l);l=l.sibling}f.type===
rc?(d=Ae(f.props.children,a.mode,g,f.key),d["return"]=a,a=d):(g=ze(f,a.mode,g),g.ref=Ue(a,d,f),g["return"]=a,a=g)}return h(a);case qc:a:{for(l=f.key;null!==d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],g);d["return"]=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Ce(f,a.mode,g);d["return"]=a;a=d}return h(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&
6===d.tag?(c(a,d.sibling),d=e(d,f,g)):(c(a,d),d=Be(f,a.mode,g)),d["return"]=a,a=d,h(a);if(Te(f))return r(a,d,f,g);if(yc(f))return Q(a,d,f,g);l&&Ve(a,f);if("undefined"===typeof f)switch(a.tag){case 2:case 1:g=a.type,D("152",g.displayName||g.name||"Component")}return c(a,d)}}var Xe=We(!0),Ye=We(!1);
function Ze(a,b,c,d,e,f,h){function g(a,b,c){k(a,b,c,b.expirationTime)}function k(a,b,c,d){b.child=null===a?Ye(b,null,c,d):Xe(b,a.child,c,d)}function v(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function l(a,b,c,d,e,f){v(a,b);if(!c&&!e)return d&&z(b,!1),r(a,b);c=b.stateNode;mc.current=b;var g=e?null:c.render();b.effectTag|=1;e&&(k(a,b,null,f),b.child=null);k(a,b,g,f);b.memoizedState=c.state;b.memoizedProps=c.props;d&&z(b,!0);return b.child}function p(a){var b=a.stateNode;
b.pendingContext?u(a,b.pendingContext,b.pendingContext!==b.context):b.context&&u(a,b.context,!1);Y(a,b.containerInfo)}function y(a,b,c,d){var e=a.child;for(null!==e&&(e["return"]=a);null!==e;){switch(e.tag){case 12:var f=e.stateNode|0;if(e.type===b&&0!==(f&c)){for(f=e;null!==f;){var g=f.alternate;if(0===f.expirationTime||f.expirationTime>d)f.expirationTime=d,null!==g&&(0===g.expirationTime||g.expirationTime>d)&&(g.expirationTime=d);else if(null!==g&&(0===g.expirationTime||g.expirationTime>d))g.expirationTime=
d;else break;f=f["return"]}f=null}else f=e.child;break;case 13:f=e.type===a.type?null:e.child;break;default:f=e.child}if(null!==f)f["return"]=e;else for(f=e;null!==f;){if(f===a){f=null;break}e=f.sibling;if(null!==e){f=e;break}f=f["return"]}e=f}}function B(a,b,c){var d=b.type.context,e=b.pendingProps,f=b.memoizedProps;if(!q()&&f===e)return b.stateNode=0,G(b),r(a,b);var l=e.value;b.memoizedProps=e;if(null===f)l=1073741823;else if(f.value===e.value){if(f.children===e.children)return b.stateNode=0,G(b),
r(a,b);l=0}else{var t=f.value;if(t===l&&(0!==t||1/t===1/l)||t!==t&&l!==l){if(f.children===e.children)return b.stateNode=0,G(b),r(a,b);l=0}else if(l="function"===typeof d._calculateChangedBits?d._calculateChangedBits(t,l):1073741823,l|=0,0===l){if(f.children===e.children)return b.stateNode=0,G(b),r(a,b)}else y(b,d,l,c)}b.stateNode=l;G(b);g(a,b,e.children);return b.child}function r(a,b){null!==a&&b.child!==a.child?D("153"):void 0;if(null!==b.child){a=b.child;var c=ye(a,a.pendingProps,a.expirationTime);
b.child=c;for(c["return"]=b;null!==a.sibling;)a=a.sibling,c=c.sibling=ye(a,a.pendingProps,a.expirationTime),c["return"]=b;c.sibling=null}return b.child}var Q=a.shouldSetTextContent,n=a.shouldDeprioritizeSubtree,x=b.pushHostContext,Y=b.pushHostContainer,G=d.pushProvider,R=c.getMaskedContext,S=c.getUnmaskedContext,q=c.hasContextChanged,t=c.pushContextProvider,u=c.pushTopLevelContextObject,z=c.invalidateContextProvider,H=e.enterHydrationState,Wa=e.resetHydrationState,Bb=e.tryToClaimNextHydratableInstance;
a=Se(c,f,h,function(a,b){a.memoizedProps=b},function(a,b){a.memoizedState=b});var Jc=a.adoptClassInstance,Kc=a.callGetDerivedStateFromProps,Lc=a.constructClassInstance,Cb=a.mountClassInstance,Mc=a.resumeMountClassInstance,Db=a.updateClassInstance;return{beginWork:function(a,b,c){if(0===b.expirationTime||b.expirationTime>c){switch(b.tag){case 3:p(b);break;case 2:t(b);break;case 4:Y(b,b.stateNode.containerInfo);break;case 13:G(b)}return null}switch(b.tag){case 0:null!==a?D("155"):void 0;var d=b.type,
e=b.pendingProps,f=S(b);f=R(b,f);d=d(e,f);b.effectTag|=1;"object"===typeof d&&null!==d&&"function"===typeof d.render&&void 0===d.$$typeof?(f=b.type,b.tag=2,b.memoizedState=null!==d.state&&void 0!==d.state?d.state:null,"function"===typeof f.getDerivedStateFromProps&&(e=Kc(b,d,e,b.memoizedState),null!==e&&void 0!==e&&(b.memoizedState=A({},b.memoizedState,e))),e=t(b),Jc(b,d),Cb(b,c),a=l(a,b,!0,e,!1,c)):(b.tag=1,g(a,b,d),b.memoizedProps=e,a=b.child);return a;case 1:return e=b.type,c=b.pendingProps,q()||
b.memoizedProps!==c?(d=S(b),d=R(b,d),e=e(c,d),b.effectTag|=1,g(a,b,e),b.memoizedProps=c,a=b.child):a=r(a,b),a;case 2:e=t(b);null===a?null===b.stateNode?(Lc(b,b.pendingProps),Cb(b,c),d=!0):d=Mc(b,c):d=Db(a,b,c);f=!1;var h=b.updateQueue;null!==h&&null!==h.capturedValues&&(f=d=!0);return l(a,b,d,e,f,c);case 3:a:if(p(b),d=b.updateQueue,null!==d){f=b.memoizedState;e=Qe(a,b,d,null,null,c);b.memoizedState=e;d=b.updateQueue;if(null!==d&&null!==d.capturedValues)d=null;else if(f===e){Wa();a=r(a,b);break a}else d=
e.element;f=b.stateNode;(null===a||null===a.child)&&f.hydrate&&H(b)?(b.effectTag|=2,b.child=Ye(b,null,d,c)):(Wa(),g(a,b,d));b.memoizedState=e;a=b.child}else Wa(),a=r(a,b);return a;case 5:a:{x(b);null===a&&Bb(b);e=b.type;h=b.memoizedProps;d=b.pendingProps;f=null!==a?a.memoizedProps:null;if(!q()&&h===d){if(h=b.mode&1&&n(e,d))b.expirationTime=1073741823;if(!h||1073741823!==c){a=r(a,b);break a}}h=d.children;Q(e,d)?h=null:f&&Q(e,f)&&(b.effectTag|=16);v(a,b);1073741823!==c&&b.mode&1&&n(e,d)?(b.expirationTime=
1073741823,b.memoizedProps=d,a=null):(g(a,b,h),b.memoizedProps=d,a=b.child)}return a;case 6:return null===a&&Bb(b),b.memoizedProps=b.pendingProps,null;case 8:b.tag=7;case 7:return e=b.pendingProps,q()||b.memoizedProps!==e||(e=b.memoizedProps),d=e.children,b.stateNode=null===a?Ye(b,b.stateNode,d,c):Xe(b,a.stateNode,d,c),b.memoizedProps=e,b.stateNode;case 9:return null;case 4:return Y(b,b.stateNode.containerInfo),e=b.pendingProps,q()||b.memoizedProps!==e?(null===a?b.child=Xe(b,null,e,c):g(a,b,e),b.memoizedProps=
e,a=b.child):a=r(a,b),a;case 14:return c=b.type.render,c=c(b.pendingProps,b.ref),g(a,b,c),b.memoizedProps=c,b.child;case 10:return c=b.pendingProps,q()||b.memoizedProps!==c?(g(a,b,c),b.memoizedProps=c,a=b.child):a=r(a,b),a;case 11:return c=b.pendingProps.children,q()||null!==c&&b.memoizedProps!==c?(g(a,b,c),b.memoizedProps=c,a=b.child):a=r(a,b),a;case 13:return B(a,b,c);case 12:d=b.type;f=b.pendingProps;var u=b.memoizedProps;e=d._currentValue;h=d._changedBits;if(q()||0!==h||u!==f){b.memoizedProps=
f;u=f.unstable_observedBits;if(void 0===u||null===u)u=1073741823;b.stateNode=u;0!==(h&u)&&y(b,d,h,c);c=f.children;c=c(e);g(a,b,c);a=b.child}else a=r(a,b);return a;default:D("156")}}}}
function $e(a,b,c,d,e){function f(a){a.effectTag|=4}var h=a.createInstance,g=a.createTextInstance,k=a.appendInitialChild,v=a.finalizeInitialChildren,l=a.prepareUpdate,p=a.persistence,y=b.getRootHostContainer,B=b.popHostContext,r=b.getHostContext,Q=b.popHostContainer,n=c.popContextProvider,x=c.popTopLevelContextObject,Y=d.popProvider,G=e.prepareToHydrateHostInstance,R=e.prepareToHydrateHostTextInstance,S=e.popHydrationState,q=void 0,t=void 0,u=void 0;a.mutation?(q=function(){},t=function(a,b,c){(b.updateQueue=
c)&&f(b)},u=function(a,b,c,d){c!==d&&f(b)}):p?D("235"):D("236");return{completeWork:function(a,b,c){var d=b.pendingProps;switch(b.tag){case 1:return null;case 2:return n(b),a=b.stateNode,d=b.updateQueue,null!==d&&null!==d.capturedValues&&(b.effectTag&=-65,"function"===typeof a.componentDidCatch?b.effectTag|=256:d.capturedValues=null),null;case 3:Q(b);x(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)S(b),b.effectTag&=-3;q(b);a=b.updateQueue;
null!==a&&null!==a.capturedValues&&(b.effectTag|=256);return null;case 5:B(b);c=y();var e=b.type;if(null!==a&&null!=b.stateNode){var p=a.memoizedProps,H=b.stateNode,z=r();H=l(H,e,p,d,c,z);t(a,b,H,e,p,d,c,z);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!d)return null===b.stateNode?D("166"):void 0,null;a=r();if(S(b))G(b,c,a)&&f(b);else{p=h(e,d,c,a,b);a:for(z=b.child;null!==z;){if(5===z.tag||6===z.tag)k(p,z.stateNode);else if(4!==z.tag&&null!==z.child){z.child["return"]=z;z=z.child;continue}if(z===b)break;
for(;null===z.sibling;){if(null===z["return"]||z["return"]===b)break a;z=z["return"]}z.sibling["return"]=z["return"];z=z.sibling}v(p,e,d,c,a)&&f(b);b.stateNode=p}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)u(a,b,a.memoizedProps,d);else{if("string"!==typeof d)return null===b.stateNode?D("166"):void 0,null;a=y();c=r();S(b)?R(b)&&f(b):b.stateNode=g(d,a,c,b)}return null;case 7:(d=b.memoizedProps)?void 0:D("165");b.tag=8;e=[];a:for((p=b.stateNode)&&(p["return"]=b);null!==
p;){if(5===p.tag||6===p.tag||4===p.tag)D("247");else if(9===p.tag)e.push(p.pendingProps.value);else if(null!==p.child){p.child["return"]=p;p=p.child;continue}for(;null===p.sibling;){if(null===p["return"]||p["return"]===b)break a;p=p["return"]}p.sibling["return"]=p["return"];p=p.sibling}p=d.handler;d=p(d.props,e);b.child=Xe(b,null!==a?a.child:null,d,c);return b.child;case 8:return b.tag=7,null;case 9:return null;case 14:return null;case 10:return null;case 11:return null;case 4:return Q(b),q(b),null;
case 13:return Y(b),null;case 12:return null;case 0:D("167");default:D("156")}}}}
function af(a,b,c,d,e){var f=a.popHostContainer,h=a.popHostContext,g=b.popContextProvider,k=b.popTopLevelContextObject,v=c.popProvider;return{throwException:function(a,b,c){b.effectTag|=512;b.firstEffect=b.lastEffect=null;b={value:c,source:b,stack:Ac(b)};do{switch(a.tag){case 3:Ne(a);a.updateQueue.capturedValues=[b];a.effectTag|=1024;return;case 2:if(c=a.stateNode,0===(a.effectTag&64)&&null!==c&&"function"===typeof c.componentDidCatch&&!e(c)){Ne(a);c=a.updateQueue;var d=c.capturedValues;null===d?
c.capturedValues=[b]:d.push(b);a.effectTag|=1024;return}}a=a["return"]}while(null!==a)},unwindWork:function(a){switch(a.tag){case 2:g(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return f(a),k(a),b=a.effectTag,b&1024?(a.effectTag=b&-1025|64,a):null;case 5:return h(a),null;case 4:return f(a),null;case 13:return v(a),null;default:return null}},unwindInterruptedWork:function(a){switch(a.tag){case 2:g(a);break;case 3:f(a);k(a);break;case 5:h(a);break;case 4:f(a);break;case 13:v(a)}}}}
function bf(a,b){var c=b.source;null===b.stack&&Ac(c);null!==c&&zc(c);b=b.value;null!==a&&2===a.tag&&zc(a);try{b&&b.suppressReactErrorLogging||console.error(b)}catch(d){d&&d.suppressReactErrorLogging||console.error(d)}}
function cf(a,b,c,d,e){function f(a){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(u){b(a,u)}else c.current=null}function h(a){"function"===typeof Ie&&Ie(a);switch(a.tag){case 2:f(a);var c=a.stateNode;if("function"===typeof c.componentWillUnmount)try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(u){b(a,u)}break;case 5:f(a);break;case 7:g(a.stateNode);break;case 4:p&&v(a)}}function g(a){for(var b=a;;)if(h(b),null===b.child||p&&4===b.tag){if(b===
a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}else b.child["return"]=b,b=b.child}function k(a){return 5===a.tag||3===a.tag||4===a.tag}function v(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b["return"];a:for(;;){null===c?D("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c["return"]}c=!0}if(5===
b.tag||6===b.tag)g(b),e?S(d,b.stateNode):R(d,b.stateNode);else if(4===b.tag?d=b.stateNode.containerInfo:h(b),null!==b.child){b.child["return"]=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"];4===b.tag&&(c=!1)}b.sibling["return"]=b["return"];b=b.sibling}}var l=a.getPublicInstance,p=a.mutation;a=a.persistence;p||(a?D("235"):D("236"));var y=p.commitMount,B=p.commitUpdate,r=p.resetTextContent,Q=p.commitTextUpdate,n=p.appendChild,
x=p.appendChildToContainer,Y=p.insertBefore,G=p.insertInContainerBefore,R=p.removeChild,S=p.removeChildFromContainer;return{commitBeforeMutationLifeCycles:function(a,b){switch(b.tag){case 2:if(b.effectTag&2048&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;a.props=b.memoizedProps;a.state=b.memoizedState;b=a.getSnapshotBeforeUpdate(c,d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:break;default:D("163")}},commitResetTextContent:function(a){r(a.stateNode)},
commitPlacement:function(a){a:{for(var b=a["return"];null!==b;){if(k(b)){var c=b;break a}b=b["return"]}D("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:D("161")}c.effectTag&16&&(r(b),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||k(c["return"])){c=null;break a}c=c["return"]}c.sibling["return"]=c["return"];for(c=c.sibling;5!==c.tag&&6!==
c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child["return"]=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)c?d?G(b,e.stateNode,c):Y(b,e.stateNode,c):d?x(b,e.stateNode):n(b,e.stateNode);else if(4!==e.tag&&null!==e.child){e.child["return"]=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e["return"]||e["return"]===a)return;e=e["return"]}e.sibling["return"]=e["return"];e=e.sibling}},commitDeletion:function(a){v(a);
a["return"]=null;a.child=null;a.alternate&&(a.alternate.child=null,a.alternate["return"]=null)},commitWork:function(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&B(c,f,e,a,d,b)}break;case 6:null===b.stateNode?D("162"):void 0;c=b.memoizedProps;Q(b.stateNode,null!==a?a.memoizedProps:c,c);break;case 3:break;default:D("163")}},commitLifeCycles:function(a,b,c){switch(c.tag){case 2:a=
c.stateNode;if(c.effectTag&4)if(null===b)a.props=c.memoizedProps,a.state=c.memoizedState,a.componentDidMount();else{var d=b.memoizedProps;b=b.memoizedState;a.props=c.memoizedProps;a.state=c.memoizedState;a.componentDidUpdate(d,b,a.__reactInternalSnapshotBeforeUpdate)}c=c.updateQueue;null!==c&&Re(c,a);break;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=l(c.child.stateNode);break;case 2:a=c.child.stateNode}Re(b,a)}break;case 5:a=c.stateNode;null===b&&c.effectTag&
4&&y(a,c.type,c.memoizedProps,c);break;case 6:break;case 4:break;default:D("163")}},commitErrorLogging:function(a,b){switch(a.tag){case 2:var c=a.type;b=a.stateNode;var d=a.updateQueue;null===d||null===d.capturedValues?D("264"):void 0;var f=d.capturedValues;d.capturedValues=null;"function"!==typeof c.getDerivedStateFromCatch&&e(b);b.props=a.memoizedProps;b.state=a.memoizedState;for(c=0;c<f.length;c++){d=f[c];var g=d.value,h=d.stack;bf(a,d);b.componentDidCatch(g,{componentStack:null!==h?h:""})}break;
case 3:c=a.updateQueue;null===c||null===c.capturedValues?D("264"):void 0;f=c.capturedValues;c.capturedValues=null;for(c=0;c<f.length;c++)d=f[c],bf(a,d),b(d.value);break;default:D("265")}},commitAttachRef:function(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=l(c);break;default:a=c}"function"===typeof b?b(a):b.current=a}},commitDetachRef:function(a){a=a.ref;null!==a&&("function"===typeof a?a(null):a.current=null)}}}var df={};
function ef(a,b){function c(a){a===df?D("174"):void 0;return a}var d=a.getChildHostContext,e=a.getRootHostContext;a=b.createCursor;var f=b.push,h=b.pop,g=a(df),k=a(df),v=a(df);return{getHostContext:function(){return c(g.current)},getRootHostContainer:function(){return c(v.current)},popHostContainer:function(a){h(g,a);h(k,a);h(v,a)},popHostContext:function(a){k.current===a&&(h(g,a),h(k,a))},pushHostContainer:function(a,b){f(v,b,a);b=e(b);f(k,a,a);f(g,b,a)},pushHostContext:function(a){var b=c(v.current),
e=c(g.current);b=d(e,a.type,b);e!==b&&(f(k,a,a),f(g,b,a))}}}
function ff(a){function b(a,b){var c=new xe(5,null,null,0);c.type="DELETED";c.stateNode=b;c["return"]=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function c(a,b){switch(a.tag){case 5:return b=f(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=h(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;default:return!1}}function d(a){for(a=a["return"];null!==a&&5!==a.tag&&3!==a.tag;)a=a["return"];p=a}var e=a.shouldSetTextContent;
a=a.hydration;if(!a)return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){D("175")},prepareToHydrateHostTextInstance:function(){D("176")},popHydrationState:function(){return!1}};var f=a.canHydrateInstance,h=a.canHydrateTextInstance,g=a.getNextHydratableSibling,k=a.getFirstHydratableChild,v=a.hydrateInstance,l=a.hydrateTextInstance,p=null,y=null,B=!1;return{enterHydrationState:function(a){y=
k(a.stateNode.containerInfo);p=a;return B=!0},resetHydrationState:function(){y=p=null;B=!1},tryToClaimNextHydratableInstance:function(a){if(B){var d=y;if(d){if(!c(a,d)){d=g(d);if(!d||!c(a,d)){a.effectTag|=2;B=!1;p=a;return}b(p,y)}p=a;y=k(d)}else a.effectTag|=2,B=!1,p=a}},prepareToHydrateHostInstance:function(a,b,c){b=v(a.stateNode,a.type,a.memoizedProps,b,c,a);a.updateQueue=b;return null!==b?!0:!1},prepareToHydrateHostTextInstance:function(a){return l(a.stateNode,a.memoizedProps,a)},popHydrationState:function(a){if(a!==
p)return!1;if(!B)return d(a),B=!0,!1;var c=a.type;if(5!==a.tag||"head"!==c&&"body"!==c&&!e(c,a.memoizedProps))for(c=y;c;)b(a,c),c=g(c);d(a);y=p?g(a.stateNode):null;return!0}}}
function gf(a){function b(a,b,c){a=a.stateNode;a.__reactInternalMemoizedUnmaskedChildContext=b;a.__reactInternalMemoizedMaskedChildContext=c}function c(a){return 2===a.tag&&null!=a.type.childContextTypes}function d(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:D("108",zc(a)||"Unknown",e);return A({},b,c)}var e=a.createCursor,f=a.push,h=a.pop,g=e(ja),k=e(!1),v=ja;return{getUnmaskedContext:function(a){return c(a)?
v:g.current},cacheContext:b,getMaskedContext:function(a,c){var d=a.type.contextTypes;if(!d)return ja;var e=a.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===c)return e.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in d)f[g]=c[g];e&&b(a,c,f);return f},hasContextChanged:function(){return k.current},isContextConsumer:function(a){return 2===a.tag&&null!=a.type.contextTypes},isContextProvider:c,popContextProvider:function(a){c(a)&&(h(k,a),h(g,a))},popTopLevelContextObject:function(a){h(k,
a);h(g,a)},pushTopLevelContextObject:function(a,b,c){null!=g.cursor?D("168"):void 0;f(g,b,a);f(k,c,a)},processChildContext:d,pushContextProvider:function(a){if(!c(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||ja;v=g.current;f(g,b,a);f(k,k.current,a);return!0},invalidateContextProvider:function(a,b){var c=a.stateNode;c?void 0:D("169");if(b){var e=d(a,v);c.__reactInternalMemoizedMergedChildContext=e;h(k,a);h(g,a);f(g,e,a)}else h(k,a);f(k,b,a)},findCurrentUnmaskedContext:function(a){for(2!==
wd(a)||2!==a.tag?D("170"):void 0;3!==a.tag;){if(c(a))return a.stateNode.__reactInternalMemoizedMergedChildContext;(a=a["return"])?void 0:D("171")}return a.stateNode.context}}}
function hf(a){var b=a.createCursor,c=a.push,d=a.pop,e=b(null),f=b(null),h=b(0);return{pushProvider:function(a){var b=a.type.context;c(h,b._changedBits,a);c(f,b._currentValue,a);c(e,a,a);b._currentValue=a.pendingProps.value;b._changedBits=a.stateNode},popProvider:function(a){var b=h.current,c=f.current;d(e,a);d(f,a);d(h,a);a=a.type.context;a._currentValue=c;a._changedBits=b}}}
function jf(){var a=[],b=-1;return{createCursor:function(a){return{current:a}},isEmpty:function(){return-1===b},pop:function(c){0>b||(c.current=a[b],a[b]=null,b--)},push:function(c,d){b++;a[b]=c.current;c.current=d},checkThatStackIsEmpty:function(){},resetStackAfterFatalErrorInDev:function(){}}}
function kf(a){function b(){if(null!==I)for(var a=I["return"];null!==a;)Lc(a),a=a["return"];Xa=null;Z=0;I=null;Nc=!1}function c(a){return null!==ya&&ya.has(a)}function d(a){for(;;){var b=a.alternate,c=a["return"],d=a.sibling;if(0===(a.effectTag&512)){b=Bb(b,a,Z);var e=a;if(1073741823===Z||1073741823!==e.expirationTime){b:switch(e.tag){case 3:case 2:var f=e.updateQueue;f=null===f?0:f.expirationTime;break b;default:f=0}for(var g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=
g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;if(null!==c)a=c;else{Nc=!0;break}}else{a=Kc(a);if(null!==a)return a.effectTag&=2559,a;null!==c&&(c.firstEffect=c.lastEffect=
null,c.effectTag|=512);if(null!==d)return d;if(null!==c)a=c;else break}}return null}function e(a){var b=Wa(a.alternate,a,Z);null===b&&(b=d(a));mc.current=null;return b}function f(a,c,f){ca?D("243"):void 0;ca=!0;if(c!==Z||a!==Xa||null===I)b(),Xa=a,Z=c,I=ye(Xa.current,null,Z),a.pendingCommitExpirationTime=0;var g=!1;do{try{if(f)for(;null!==I&&!S();)I=e(I);else for(;null!==I;)I=e(I)}catch(Oc){if(null===I){g=!0;q(Oc);break}f=I;var h=f["return"];if(null===h){g=!0;q(Oc);break}Jc(h,f,Oc);I=d(f)}break}while(1);
ca=!1;if(g||null!==I)return null;if(Nc)return a.pendingCommitExpirationTime=c,a.current.alternate;D("262")}function h(a,b,c,d){a={value:c,source:a,stack:Ac(a)};Oe(b,{expirationTime:d,partialState:null,callback:null,isReplace:!1,isForced:!1,capturedValue:a,next:null});v(b,d)}function g(a,b){a:{ca&&!Ya?D("263"):void 0;for(var d=a["return"];null!==d;){switch(d.tag){case 2:var e=d.stateNode;if("function"===typeof d.type.getDerivedStateFromCatch||"function"===typeof e.componentDidCatch&&!c(e)){h(a,d,b,
1);a=void 0;break a}break;case 3:h(a,d,b,1);a=void 0;break a}d=d["return"]}3===a.tag&&h(a,a,b,1);a=void 0}return a}function k(a){a=0!==ia?ia:ca?Ya?1:Z:a.mode&1?za?10*(((l()+50)/10|0)+1):25*(((l()+500)/25|0)+1):1;za&&(0===da||a>da)&&(da=a);return a}function v(a,c){a:{for(;null!==a;){if(0===a.expirationTime||a.expirationTime>c)a.expirationTime=c;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>c)&&(a.alternate.expirationTime=c);if(null===a["return"])if(3===a.tag){var d=
a.stateNode;!ca&&0!==Z&&c<Z&&b();ca&&!Ya&&Xa===d||B(d,c);Fb>wg&&D("185")}else{c=void 0;break a}a=a["return"]}c=void 0}return c}function l(){ve=Ic()-Pc;return xg=(ve/10|0)+2}function p(a,b,c,d,e){var f=ia;ia=1;try{return a(b,c,d,e)}finally{ia=f}}function y(a){if(0!==Gb){if(a>Gb)return;yg(Qc)}var b=Ic()-Pc;Gb=a;Qc=lg(Q,{timeout:10*(a-2)-b})}function B(a,b){if(null===a.nextScheduledRoot)a.remainingExpirationTime=b,null===K?(la=K=a,a.nextScheduledRoot=a):(K=K.nextScheduledRoot=a,K.nextScheduledRoot=la);
else{var c=a.remainingExpirationTime;if(0===c||b<c)a.remainingExpirationTime=b}T||(J?Hb&&(aa=a,P=1,G(a,1,!1)):1===b?n():y(b))}function r(){var a=0,b=null;if(null!==K)for(var c=K,d=la;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===K?D("244"):void 0;if(d===d.nextScheduledRoot){la=K=d.nextScheduledRoot=null;break}else if(d===la)la=e=d.nextScheduledRoot,K.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===K){K=c;K.nextScheduledRoot=la;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=
d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===K)break;c=d;d=d.nextScheduledRoot}}c=aa;null!==c&&c===b&&1===a?Fb++:Fb=0;aa=b;P=a}function Q(a){x(0,!0,a)}function n(){x(1,!1,null)}function x(a,b,c){Za=c;r();if(b)for(;null!==aa&&0!==P&&(0===a||a>=P)&&(!Ib||l()>=P);)G(aa,P,!Ib),r();else for(;null!==aa&&0!==P&&(0===a||a>=P);)G(aa,P,!1),r();null!==Za&&(Gb=0,Qc=-1);0!==P&&y(P);Za=null;Ib=!1;Y()}function Y(){Fb=0;if(null!==Aa){var a=Aa;Aa=null;for(var b=
0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(vg){Ba||(Ba=!0,Jb=vg)}}}if(Ba)throw a=Jb,Jb=null,Ba=!1,a;}function G(a,b,c){T?D("245"):void 0;T=!0;c?(c=a.finishedWork,null!==c?R(a,c,b):(a.finishedWork=null,c=f(a,b,!0),null!==c&&(S()?a.finishedWork=c:R(a,c,b)))):(c=a.finishedWork,null!==c?R(a,c,b):(a.finishedWork=null,c=f(a,b,!1),null!==c&&R(a,c,b)));T=!1}function R(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===Aa?Aa=[d]:Aa.push(d),d._defer)){a.finishedWork=b;a.remainingExpirationTime=
0;return}a.finishedWork=null;Ya=ca=!0;c=b.stateNode;c.current===b?D("177"):void 0;d=c.pendingCommitExpirationTime;0===d?D("261"):void 0;c.pendingCommitExpirationTime=0;var e=l();mc.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var f=b.firstEffect}else f=b;else f=b.firstEffect;zg(c.containerInfo);for(w=f;null!==w;){var h=!1,k=void 0;try{for(;null!==w;)w.effectTag&2048&&Cb(w.alternate,w),w=w.nextEffect}catch($a){h=!0,k=$a}h&&(null===w?D("178"):void 0,g(w,k),null!==
w&&(w=w.nextEffect))}for(w=f;null!==w;){h=!1;k=void 0;try{for(;null!==w;){var p=w.effectTag;p&16&&Mc(w);if(p&128){var n=w.alternate;null!==n&&kg(n)}switch(p&14){case 2:Db(w);w.effectTag&=-3;break;case 6:Db(w);w.effectTag&=-3;te(w.alternate,w);break;case 4:te(w.alternate,w);break;case 8:gg(w)}w=w.nextEffect}}catch($a){h=!0,k=$a}h&&(null===w?D("178"):void 0,g(w,k),null!==w&&(w=w.nextEffect))}Ag(c.containerInfo);c.current=b;for(w=f;null!==w;){p=!1;n=void 0;try{for(f=c,h=e,k=d;null!==w;){var r=w.effectTag;
r&36&&hg(f,w.alternate,w,h,k);r&256&&ig(w,q);r&128&&jg(w);var t=w.nextEffect;w.nextEffect=null;w=t}}catch($a){p=!0,n=$a}p&&(null===w?D("178"):void 0,g(w,n),null!==w&&(w=w.nextEffect))}ca=Ya=!1;"function"===typeof He&&He(b.stateNode);b=c.current.expirationTime;0===b&&(ya=null);a.remainingExpirationTime=b}function S(){return null===Za||Za.timeRemaining()>Bg?!1:Ib=!0}function q(a){null===aa?D("246"):void 0;aa.remainingExpirationTime=0;Ba||(Ba=!0,Jb=a)}var t=jf(),u=ef(a,t),z=gf(t);t=hf(t);var H=ff(a),
Wa=Ze(a,u,z,t,H,v,k).beginWork,Bb=$e(a,u,z,t,H).completeWork;u=af(u,z,t,v,c);var Jc=u.throwException,Kc=u.unwindWork,Lc=u.unwindInterruptedWork;u=cf(a,g,v,k,function(a){null===ya?ya=new Set([a]):ya.add(a)},l);var Cb=u.commitBeforeMutationLifeCycles,Mc=u.commitResetTextContent,Db=u.commitPlacement,gg=u.commitDeletion,te=u.commitWork,hg=u.commitLifeCycles,ig=u.commitErrorLogging,jg=u.commitAttachRef,kg=u.commitDetachRef,Ic=a.now,lg=a.scheduleDeferredCallback,yg=a.cancelDeferredCallback,zg=a.prepareForCommit,
Ag=a.resetAfterCommit,Pc=Ic(),xg=2,ve=Pc,Rc=0,ia=0,ca=!1,I=null,Xa=null,Z=0,w=null,Ya=!1,Nc=!1,ya=null,la=null,K=null,Gb=0,Qc=-1,T=!1,aa=null,P=0,da=0,Ib=!1,Ba=!1,Jb=null,Za=null,J=!1,Hb=!1,za=!1,Aa=null,wg=1E3,Fb=0,Bg=1;return{recalculateCurrentTime:l,computeExpirationForFiber:k,scheduleWork:v,requestWork:B,flushRoot:function(a,b){T?D("253"):void 0;aa=a;P=b;G(a,b,!1);n();Y()},batchedUpdates:function(a,b){var c=J;J=!0;try{return a(b)}finally{(J=c)||T||n()}},unbatchedUpdates:function(a,b){if(J&&!Hb){Hb=
!0;try{return a(b)}finally{Hb=!1}}return a(b)},flushSync:function(a,b){T?D("187"):void 0;var c=J;J=!0;try{return p(a,b)}finally{J=c,n()}},flushControlled:function(a){var b=J;J=!0;try{p(a)}finally{(J=b)||T||x(1,!1,null)}},deferredUpdates:function(a){var b=ia;ia=25*(((l()+500)/25|0)+1);try{return a()}finally{ia=b}},syncUpdates:p,interactiveUpdates:function(a,b,c){if(za)return a(b,c);J||T||0===da||(x(da,!1,null),da=0);var d=za,e=J;J=za=!0;try{return a(b,c)}finally{za=d,(J=e)||T||n()}},flushInteractiveUpdates:function(){T||
0===da||(x(da,!1,null),da=0)},computeUniqueAsyncExpiration:function(){var a=25*(((l()+500)/25|0)+1);a<=Rc&&(a=Rc+1);return Rc=a},legacyContext:z}}
function lf(a){function b(a,b,c,d,e,f){d=b.current;if(c){c=c._reactInternalFiber;var g=k(c);c=v(c)?l(c,g):g}else c=ja;null===b.context?b.context=c:b.pendingContext=c;b=f;Oe(d,{expirationTime:e,partialState:{element:a},callback:void 0===b?null:b,isReplace:!1,isForced:!1,capturedValue:null,next:null});h(d,e);return e}function c(a){a=Ad(a);return null===a?null:a.stateNode}var d=a.getPublicInstance;a=kf(a);var e=a.recalculateCurrentTime,f=a.computeExpirationForFiber,h=a.scheduleWork,g=a.legacyContext,
k=g.findCurrentUnmaskedContext,v=g.isContextProvider,l=g.processChildContext;return{createContainer:function(a,b,c){b=new xe(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pendingCommitExpirationTime:0,finishedWork:null,context:null,pendingContext:null,hydrate:c,remainingExpirationTime:0,firstBatch:null,nextScheduledRoot:null};return b.stateNode=a},updateContainer:function(a,c,d,g){var h=c.current,k=e();h=f(h);return b(a,c,d,k,h,g)},updateContainerAtExpirationTime:function(a,
c,d,f,g){var h=e();return b(a,c,d,h,f,g)},flushRoot:a.flushRoot,requestWork:a.requestWork,computeUniqueAsyncExpiration:a.computeUniqueAsyncExpiration,batchedUpdates:a.batchedUpdates,unbatchedUpdates:a.unbatchedUpdates,deferredUpdates:a.deferredUpdates,syncUpdates:a.syncUpdates,interactiveUpdates:a.interactiveUpdates,flushInteractiveUpdates:a.flushInteractiveUpdates,flushControlled:a.flushControlled,flushSync:a.flushSync,getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return d(a.child.stateNode);
default:return a.child.stateNode}},findHostInstance:c,findHostInstanceWithNoPortals:function(a){a=Bd(a);return null===a?null:a.stateNode},injectIntoDevTools:function(a){var b=a.findFiberByHostInstance;return Ge(A({},a,{findHostInstanceByFiber:function(a){return c(a)},findFiberByHostInstance:function(a){return b?b(a):null}}))}}}var mf=Object.freeze({default:lf}),nf=mf&&lf||mf,of=nf["default"]?nf["default"]:nf;
function pf(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:qc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}var qf="object"===typeof performance&&"function"===typeof performance.now,rf=void 0;rf=qf?function(){return performance.now()}:function(){return Date.now()};var sf=void 0,tf=void 0;
if(m.canUseDOM)if("function"!==typeof requestIdleCallback||"function"!==typeof cancelIdleCallback){var uf=null,vf=!1,wf=-1,xf=!1,yf=0,zf=33,Af=33,Bf=void 0;Bf=qf?{didTimeout:!1,timeRemaining:function(){var a=yf-performance.now();return 0<a?a:0}}:{didTimeout:!1,timeRemaining:function(){var a=yf-Date.now();return 0<a?a:0}};var Cf="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===Cf){vf=!1;a=rf();if(0>=yf-a)if(-1!==
wf&&wf<=a)Bf.didTimeout=!0;else{xf||(xf=!0,requestAnimationFrame(Df));return}else Bf.didTimeout=!1;wf=-1;a=uf;uf=null;null!==a&&a(Bf)}},!1);var Df=function(a){xf=!1;var b=a-yf+Af;b<Af&&zf<Af?(8>b&&(b=8),Af=b<zf?zf:b):zf=b;yf=a+Af;vf||(vf=!0,window.postMessage(Cf,"*"))};sf=function(a,b){uf=a;null!=b&&"number"===typeof b.timeout&&(wf=rf()+b.timeout);xf||(xf=!0,requestAnimationFrame(Df));return 0};tf=function(){uf=null;vf=!1;wf=-1}}else sf=window.requestIdleCallback,tf=window.cancelIdleCallback;else sf=
function(a){return setTimeout(function(){a({timeRemaining:function(){return Infinity},didTimeout:!1})})},tf=function(a){clearTimeout(a)};function Ef(a){var b="";ba.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function Ff(a,b){a=A({children:void 0},b);if(b=Ef(b.children))a.children=b;return a}
function Gf(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Hf(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function If(a,b){null!=b.dangerouslySetInnerHTML?D("91"):void 0;return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jf(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?D("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:D("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
function Kf(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Lf(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Mf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pf=void 0,Qf=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mf.svg||"innerHTML"in a)a.innerHTML=b;else{Pf=Pf||document.createElement("div");Pf.innerHTML="\x3csvg\x3e"+b+"\x3c/svg\x3e";for(b=Pf.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rf(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Sf={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(Sf).forEach(function(a){Tf.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Sf[b]=Sf[a]})});
function Uf(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Sf.hasOwnProperty(e)&&Sf[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Vf=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Wf(a,b,c){b&&(Vf[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?D("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?D("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:D("61")),null!=b.style&&"object"!==typeof b.style?D("62",c()):void 0)}
function Xf(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var Yf=Mf.html,Zf=C.thatReturns("");
function $f(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=je(a);b=ua[b];for(var d=0;d<b.length;d++){var e=b[d];c.hasOwnProperty(e)&&c[e]||("topScroll"===e?Yd("topScroll","scroll",a):"topFocus"===e||"topBlur"===e?(Yd("topFocus","focus",a),Yd("topBlur","blur",a),c.topBlur=!0,c.topFocus=!0):"topCancel"===e?(hc("cancel",!0)&&Yd("topCancel","cancel",a),c.topCancel=!0):"topClose"===e?(hc("close",!0)&&Yd("topClose","close",a),c.topClose=!0):ee.hasOwnProperty(e)&&W(e,ee[e],a),c[e]=!0)}}
function ag(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===Yf&&(d=Nf(a));d===Yf?"script"===a?(a=c.createElement("div"),a.innerHTML="\x3cscript\x3e\x3c/script\x3e",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function bg(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
function cg(a,b,c,d){var e=Xf(b,c);switch(b){case "iframe":case "object":W("topLoad","load",a);var f=c;break;case "video":case "audio":for(f in fe)fe.hasOwnProperty(f)&&W(f,fe[f],a);f=c;break;case "source":W("topError","error",a);f=c;break;case "img":case "image":case "link":W("topError","error",a);W("topLoad","load",a);f=c;break;case "form":W("topReset","reset",a);W("topSubmit","submit",a);f=c;break;case "details":W("topToggle","toggle",a);f=c;break;case "input":Vc(a,c);f=Uc(a,c);W("topInvalid",
"invalid",a);$f(d,"onChange");break;case "option":f=Ff(a,c);break;case "select":Hf(a,c);f=A({},c,{value:void 0});W("topInvalid","invalid",a);$f(d,"onChange");break;case "textarea":Jf(a,c);f=If(a,c);W("topInvalid","invalid",a);$f(d,"onChange");break;default:f=c}Wf(b,f,Zf);var h=f,g;for(g in h)if(h.hasOwnProperty(g)){var k=h[g];"style"===g?Uf(a,k,Zf):"dangerouslySetInnerHTML"===g?(k=k?k.__html:void 0,null!=k&&Qf(a,k)):"children"===g?"string"===typeof k?("textarea"!==b||""!==k)&&Rf(a,k):"number"===typeof k&&
Rf(a,""+k):"suppressContentEditableWarning"!==g&&"suppressHydrationWarning"!==g&&"autoFocus"!==g&&(ta.hasOwnProperty(g)?null!=k&&$f(d,g):null!=k&&Tc(a,g,k,e))}switch(b){case "input":kc(a);$c(a,c);break;case "textarea":kc(a);Lf(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?Gf(a,!!c.multiple,b,!1):null!=c.defaultValue&&Gf(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=C)}}
function dg(a,b,c,d,e){var f=null;switch(b){case "input":c=Uc(a,c);d=Uc(a,d);f=[];break;case "option":c=Ff(a,c);d=Ff(a,d);f=[];break;case "select":c=A({},c,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":c=If(a,c);d=If(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=C)}Wf(b,d,Zf);b=a=void 0;var h=null;for(a in c)if(!d.hasOwnProperty(a)&&c.hasOwnProperty(a)&&null!=c[a])if("style"===a){var g=c[a];for(b in g)g.hasOwnProperty(b)&&(h||
(h={}),h[b]="")}else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(ta.hasOwnProperty(a)?f||(f=[]):(f=f||[]).push(a,null));for(a in d){var k=d[a];g=null!=c?c[a]:void 0;if(d.hasOwnProperty(a)&&k!==g&&(null!=k||null!=g))if("style"===a)if(g){for(b in g)!g.hasOwnProperty(b)||k&&k.hasOwnProperty(b)||(h||(h={}),h[b]="");for(b in k)k.hasOwnProperty(b)&&g[b]!==k[b]&&(h||(h={}),h[b]=k[b])}else h||(f||(f=[]),f.push(a,h)),
h=k;else"dangerouslySetInnerHTML"===a?(k=k?k.__html:void 0,g=g?g.__html:void 0,null!=k&&g!==k&&(f=f||[]).push(a,""+k)):"children"===a?g===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(a,""+k):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(ta.hasOwnProperty(a)?(null!=k&&$f(e,a),f||g===k||(f=[])):(f=f||[]).push(a,k))}h&&(f=f||[]).push("style",h);return f}
function eg(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Xc(a,e);Xf(c,d);d=Xf(c,e);for(var f=0;f<b.length;f+=2){var h=b[f],g=b[f+1];"style"===h?Uf(a,g,Zf):"dangerouslySetInnerHTML"===h?Qf(a,g):"children"===h?Rf(a,g):Tc(a,h,g,d)}switch(c){case "input":Yc(a,e);break;case "textarea":Kf(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Gf(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?
Gf(a,!!e.multiple,e.defaultValue,!0):Gf(a,!!e.multiple,e.multiple?[]:"",!1))}}
function fg(a,b,c,d,e){switch(b){case "iframe":case "object":W("topLoad","load",a);break;case "video":case "audio":for(var f in fe)fe.hasOwnProperty(f)&&W(f,fe[f],a);break;case "source":W("topError","error",a);break;case "img":case "image":case "link":W("topError","error",a);W("topLoad","load",a);break;case "form":W("topReset","reset",a);W("topSubmit","submit",a);break;case "details":W("topToggle","toggle",a);break;case "input":Vc(a,c);W("topInvalid","invalid",a);$f(e,"onChange");break;case "select":Hf(a,
c);W("topInvalid","invalid",a);$f(e,"onChange");break;case "textarea":Jf(a,c),W("topInvalid","invalid",a),$f(e,"onChange")}Wf(b,c,Zf);d=null;for(var h in c)c.hasOwnProperty(h)&&(f=c[h],"children"===h?"string"===typeof f?a.textContent!==f&&(d=["children",f]):"number"===typeof f&&a.textContent!==""+f&&(d=["children",""+f]):ta.hasOwnProperty(h)&&null!=f&&$f(e,h));switch(b){case "input":kc(a);$c(a,c);break;case "textarea":kc(a);Lf(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&
(a.onclick=C)}return d}function mg(a,b){return a.nodeValue!==b}
var ng=Object.freeze({createElement:ag,createTextNode:bg,setInitialProperties:cg,diffProperties:dg,updateProperties:eg,diffHydratedProperties:fg,diffHydratedText:mg,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=
c.parentNode;c=c.querySelectorAll("input[name\x3d"+JSON.stringify(""+b)+'][type\x3d"radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Va(d);e?void 0:D("90");lc(d);Yc(d,e)}}}break;case "textarea":Kf(a,c);break;case "select":b=c.value,null!=b&&Gf(a,!!c.multiple,b,!1)}}});Vb.injectFiberControlledHostComponent(ng);var og=null,pg=null;
function qg(a){this._expirationTime=X.computeUniqueAsyncExpiration();this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}qg.prototype.render=function(a){this._defer?void 0:D("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new rg;X.updateContainerAtExpirationTime(a,b,null,c,d._onCommit);return d};
qg.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
qg.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:D("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?D("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;X.flushRoot(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};qg.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function rg(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}rg.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
rg.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?D("191",c):void 0;c()}}};function sg(a,b,c){this._internalRoot=X.createContainer(a,b,c)}sg.prototype.render=function(a,b){var c=this._internalRoot,d=new rg;b=void 0===b?null:b;null!==b&&d.then(b);X.updateContainer(a,c,null,d._onCommit);return d};
sg.prototype.unmount=function(a){var b=this._internalRoot,c=new rg;a=void 0===a?null:a;null!==a&&c.then(a);X.updateContainer(null,b,null,c._onCommit);return c};sg.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new rg;c=void 0===c?null:c;null!==c&&e.then(c);X.updateContainer(b,d,a,e._onCommit);return e};
sg.prototype.createBatch=function(){var a=new qg(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function tg(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function ug(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
var X=of({getRootHostContext:function(a){var b=a.nodeType;switch(b){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Of(null,"");break;default:b=8===b?a.parentNode:a,a=b.namespaceURI||null,b=b.tagName,a=Of(a,b)}return a},getChildHostContext:function(a,b){return Of(a,b)},getPublicInstance:function(a){return a},prepareForCommit:function(){og=Ud;var a=ea();if(me(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{var c=window.getSelection&&window.getSelection();
if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(B){b=null;break a}var f=0,h=-1,g=-1,k=0,v=0,l=a,p=null;b:for(;;){for(var y;;){l!==b||0!==d&&3!==l.nodeType||(h=f+d);l!==e||0!==c&&3!==l.nodeType||(g=f+c);3===l.nodeType&&(f+=l.nodeValue.length);if(null===(y=l.firstChild))break;p=l;l=y}for(;;){if(l===a)break b;p===b&&++k===d&&(h=f);p===e&&++v===c&&(g=f);if(null!==(y=l.nextSibling))break;l=p;p=l.parentNode}l=y}b=-1===h||-1===g?null:
{start:h,end:g}}else b=null}b=b||{start:0,end:0}}else b=null;pg={focusedElem:a,selectionRange:b};Vd(!1)},resetAfterCommit:function(){var a=pg,b=ea(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&ha(document.documentElement,c)){if(me(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(window.getSelection){b=window.getSelection();var e=c[lb()].length;a=Math.min(d.start,e);d=void 0===d.end?a:Math.min(d.end,e);!b.extend&&a>
d&&(e=d,d=a,a=e);e=le(c,a);var f=le(c,d);if(e&&f&&(1!==b.rangeCount||b.anchorNode!==e.node||b.anchorOffset!==e.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var h=document.createRange();h.setStart(e.node,e.offset);b.removeAllRanges();a>d?(b.addRange(h),b.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),b.addRange(h))}}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,
a.element.scrollTop=a.top}pg=null;Vd(og);og=null},createInstance:function(a,b,c,d,e){a=ag(a,b,c,d);a[F]=e;a[Sa]=b;return a},appendInitialChild:function(a,b){a.appendChild(b)},finalizeInitialChildren:function(a,b,c,d){cg(a,b,c,d);return ug(b,c)},prepareUpdate:function(a,b,c,d,e){return dg(a,b,c,d,e)},shouldSetTextContent:function(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===
typeof b.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(a,b){return!!b.hidden},createTextInstance:function(a,b,c,d){a=bg(a,b);a[F]=d;return a},now:rf,mutation:{commitMount:function(a,b,c){ug(b,c)&&a.focus()},commitUpdate:function(a,b,c,d,e){a[Sa]=e;eg(a,b,c,d,e)},resetTextContent:function(a){Rf(a,"")},commitTextUpdate:function(a,b,c){a.nodeValue=c},appendChild:function(a,b){a.appendChild(b)},appendChildToContainer:function(a,b){8===a.nodeType?a.parentNode.insertBefore(b,a):a.appendChild(b)},
insertBefore:function(a,b,c){a.insertBefore(b,c)},insertInContainerBefore:function(a,b,c){8===a.nodeType?a.parentNode.insertBefore(b,c):a.insertBefore(b,c)},removeChild:function(a,b){a.removeChild(b)},removeChildFromContainer:function(a,b){8===a.nodeType?a.parentNode.removeChild(b):a.removeChild(b)}},hydration:{canHydrateInstance:function(a,b){return 1!==a.nodeType||b.toLowerCase()!==a.nodeName.toLowerCase()?null:a},canHydrateTextInstance:function(a,b){return""===b||3!==a.nodeType?null:a},getNextHydratableSibling:function(a){for(a=
a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},getFirstHydratableChild:function(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},hydrateInstance:function(a,b,c,d,e,f){a[F]=f;a[Sa]=c;return fg(a,b,c,e,d)},hydrateTextInstance:function(a,b,c){a[F]=c;return mg(a,b)},didNotMatchHydratedContainerTextInstance:function(){},didNotMatchHydratedTextInstance:function(){},didNotHydrateContainerInstance:function(){},didNotHydrateInstance:function(){},
didNotFindHydratableContainerInstance:function(){},didNotFindHydratableContainerTextInstance:function(){},didNotFindHydratableInstance:function(){},didNotFindHydratableTextInstance:function(){}},scheduleDeferredCallback:sf,cancelDeferredCallback:tf}),Cg=X;$b=Cg.batchedUpdates;ac=Cg.interactiveUpdates;bc=Cg.flushInteractiveUpdates;
function Dg(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new sg(a,!1,b)}
function Eg(a,b,c,d,e){tg(c)?void 0:D("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var h=e;e=function(){var a=X.getPublicRootInstance(f._internalRoot);h.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Dg(c,d);if("function"===typeof e){var g=e;e=function(){var a=X.getPublicRootInstance(f._internalRoot);g.call(a)}}X.unbatchedUpdates(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return X.getPublicRootInstance(f._internalRoot)}
function Fg(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;tg(b)?void 0:D("200");return pf(a,b,null,c)}
var Gg={createPortal:Fg,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(b)return X.findHostInstance(b);"function"===typeof a.render?D("188"):D("213",Object.keys(a))},hydrate:function(a,b,c){return Eg(null,a,b,!0,c)},render:function(a,b,c){return Eg(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?D("38"):void 0;return Eg(a,b,c,!1,d)},unmountComponentAtNode:function(a){tg(a)?void 0:
D("40");return a._reactRootContainer?(X.unbatchedUpdates(function(){Eg(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Fg.apply(void 0,arguments)},unstable_batchedUpdates:X.batchedUpdates,unstable_deferredUpdates:X.deferredUpdates,flushSync:X.flushSync,unstable_flushControlled:X.flushControlled,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:Qa,EventPluginRegistry:xa,EventPropagators:jb,ReactControlledComponent:Zb,ReactDOMComponentTree:ab,
ReactDOMEventListener:Zd},unstable_createRoot:function(a,b){return new sg(a,!0,null!=b&&!0===b.hydrate)}};X.injectIntoDevTools({findFiberByHostInstance:Ta,bundleType:0,version:"16.3.0",rendererPackageName:"react-dom"});var Hg=Object.freeze({default:Gg}),Ig=Hg&&Gg||Hg;module.exports=Ig["default"]?Ig["default"]:Ig;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(152);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(153);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(69);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(68);
var invariant = __webpack_require__(96);
var ReactPropTypesSecret = __webpack_require__(156);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hoistNonReactStatics = factory());
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(177);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(100);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(165);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(70), __webpack_require__(164)(module)))

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(174);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(171);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(169);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(70)))

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(102);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(173);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(100);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(101);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(178);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(69);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(48);

var _reduxThunk = __webpack_require__(180);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(181);

var _reducers = __webpack_require__(182);

var _reducers2 = _interopRequireDefault(_reducers);

var _mediaMiddleware = __webpack_require__(213);

var _mediaMiddleware2 = _interopRequireDefault(_mediaMiddleware);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const compose = (0, _reduxDevtoolsExtension.composeWithDevTools)({
  actionsBlacklist: [_actionTypes.UPDATE_TIME_ELAPSED, _actionTypes.STEP_MARQUEE]
});

const getStore = (media, actionEmitter, customMiddlewares = [], stateOverrides) => {
  let initialState;
  if (stateOverrides) {
    initialState = (0, _utils.merge)((0, _reducers2.default)(undefined, { type: "@@init" }), stateOverrides);
  }

  // eslint-disable-next-line no-unused-vars
  const emitterMiddleware = store => next => action => {
    actionEmitter.trigger(action.type);
    return next(action);
  };

  return (0, _redux.createStore)(_reducers2.default, initialState, compose((0, _redux.applyMiddleware)(...[_reduxThunk2.default, (0, _mediaMiddleware2.default)(media), emitterMiddleware, ...customMiddlewares].filter(Boolean))));
};

exports.default = getStore;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(48).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(48);

var _playlist = __webpack_require__(103);

var _playlist2 = _interopRequireDefault(_playlist);

var _windows = __webpack_require__(206);

var _windows2 = _interopRequireDefault(_windows);

var _media = __webpack_require__(207);

var _media2 = _interopRequireDefault(_media);

var _display = __webpack_require__(208);

var _display2 = _interopRequireDefault(_display);

var _userInput = __webpack_require__(209);

var _userInput2 = _interopRequireDefault(_userInput);

var _equalizer = __webpack_require__(210);

var _equalizer2 = _interopRequireDefault(_equalizer);

var _network = __webpack_require__(211);

var _network2 = _interopRequireDefault(_network);

var _settings = __webpack_require__(212);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reducer = (0, _redux.combineReducers)({
  userInput: _userInput2.default,
  windows: _windows2.default,
  display: _display2.default,
  settings: _settings2.default,
  equalizer: _equalizer2.default,
  playlist: _playlist2.default,
  media: _media2.default,
  network: _network2.default
});

exports.default = reducer;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(29);
__webpack_require__(39);
__webpack_require__(184);
__webpack_require__(190);
__webpack_require__(193);
__webpack_require__(195);
module.exports = __webpack_require__(8).Set;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(185);
var validate = __webpack_require__(104);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(186)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(15).f;
var create = __webpack_require__(46);
var redefineAll = __webpack_require__(66);
var ctx = __webpack_require__(18);
var anInstance = __webpack_require__(63);
var forOf = __webpack_require__(40);
var $iterDefine = __webpack_require__(62);
var step = __webpack_require__(87);
var setSpecies = __webpack_require__(94);
var DESCRIPTORS = __webpack_require__(19);
var fastKey = __webpack_require__(72).fastKey;
var validate = __webpack_require__(104);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(13);
var $export = __webpack_require__(10);
var meta = __webpack_require__(72);
var fails = __webpack_require__(25);
var hide = __webpack_require__(21);
var redefineAll = __webpack_require__(66);
var forOf = __webpack_require__(40);
var anInstance = __webpack_require__(63);
var isObject = __webpack_require__(14);
var setToStringTag = __webpack_require__(38);
var dP = __webpack_require__(15).f;
var each = __webpack_require__(187)(0);
var DESCRIPTORS = __webpack_require__(19);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(18);
var IObject = __webpack_require__(53);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(43);
var asc = __webpack_require__(188);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(189);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(105);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(10);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(191)('Set') });


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(47);
var from = __webpack_require__(192);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(40);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(194)('Set');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(10);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(196)('Set');


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(10);
var aFunction = __webpack_require__(33);
var ctx = __webpack_require__(18);
var forOf = __webpack_require__(40);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, process) {var require;var require;(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsmediatags = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports = XMLHttpRequest;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaFileReader = require('./MediaFileReader');

var ArrayFileReader = function (_MediaFileReader) {
  _inherits(ArrayFileReader, _MediaFileReader);

  function ArrayFileReader(array) {
    _classCallCheck(this, ArrayFileReader);

    var _this = _possibleConstructorReturn(this, (ArrayFileReader.__proto__ || Object.getPrototypeOf(ArrayFileReader)).call(this));

    _this._array = array;
    _this._size = array.length;
    _this._isInitialized = true;
    return _this;
  }

  _createClass(ArrayFileReader, [{
    key: 'init',
    value: function init(callbacks) {
      setTimeout(callbacks.onSuccess, 0);
    }
  }, {
    key: 'loadRange',
    value: function loadRange(range, callbacks) {
      setTimeout(callbacks.onSuccess, 0);
    }
  }, {
    key: 'getByteAt',
    value: function getByteAt(offset) {
      if (offset >= this._array.length) {
        throw new Error("Offset " + offset + " hasn't been loaded yet.");
      }
      return this._array[offset];
    }
  }], [{
    key: 'canReadFile',
    value: function canReadFile(file) {
      return Array.isArray(file) || typeof Buffer === 'function' && Buffer.isBuffer(file);
    }
  }]);

  return ArrayFileReader;
}(MediaFileReader);

module.exports = ArrayFileReader;

},{"./MediaFileReader":11}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChunkedFileData = require('./ChunkedFileData');
var MediaFileReader = require('./MediaFileReader');

var BlobFileReader = function (_MediaFileReader) {
  _inherits(BlobFileReader, _MediaFileReader);

  function BlobFileReader(blob) {
    _classCallCheck(this, BlobFileReader);

    var _this = _possibleConstructorReturn(this, (BlobFileReader.__proto__ || Object.getPrototypeOf(BlobFileReader)).call(this));

    _this._blob = blob;
    _this._fileData = new ChunkedFileData();
    return _this;
  }

  _createClass(BlobFileReader, [{
    key: '_init',
    value: function _init(callbacks) {
      this._size = this._blob.size;
      setTimeout(callbacks.onSuccess, 1);
    }
  }, {
    key: 'loadRange',
    value: function loadRange(range, callbacks) {
      var self = this;
      // $FlowIssue - flow isn't aware of mozSlice or webkitSlice
      var blobSlice = this._blob.slice || this._blob.mozSlice || this._blob.webkitSlice;
      var blob = blobSlice.call(this._blob, range[0], range[1] + 1);
      var browserFileReader = new FileReader();

      browserFileReader.onloadend = function (event) {
        var intArray = new Uint8Array(browserFileReader.result);
        self._fileData.addData(range[0], intArray);
        callbacks.onSuccess();
      };
      browserFileReader.onerror = browserFileReader.onabort = function (event) {
        if (callbacks.onError) {
          callbacks.onError({ "type": "blob", "info": browserFileReader.error });
        }
      };

      browserFileReader.readAsArrayBuffer(blob);
    }
  }, {
    key: 'getByteAt',
    value: function getByteAt(offset) {
      return this._fileData.getByteAt(offset);
    }
  }], [{
    key: 'canReadFile',
    value: function canReadFile(file) {
      return typeof Blob !== "undefined" && file instanceof Blob ||
      // File extends Blob but it seems that File instanceof Blob doesn't
      // quite work as expected in Cordova/PhoneGap.
      typeof File !== "undefined" && file instanceof File;
    }
  }]);

  return BlobFileReader;
}(MediaFileReader);

module.exports = BlobFileReader;

},{"./ChunkedFileData":5,"./MediaFileReader":11}],5:[function(require,module,exports){
/**
 * This class represents a file that might not have all its data loaded yet.
 * It is used when loading the entire file is not an option because it's too
 * expensive. Instead, parts of the file are loaded and added only when needed.
 * From a reading point of view is as if the entire file is loaded. The
 * exception is when the data is not available yet, an error will be thrown.
 * This class does not load the data, it just manages it. It provides operations
 * to add and read data from the file.
 *
 * 
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NOT_FOUND = -1;

var ChunkedFileData = function () {
  _createClass(ChunkedFileData, null, [{
    key: 'NOT_FOUND',

    // $FlowIssue - get/set properties not yet supported
    get: function () {
      return NOT_FOUND;
    }
  }]);

  function ChunkedFileData() {
    _classCallCheck(this, ChunkedFileData);

    this._fileData = [];
  }

  /**
   * Adds data to the file storage at a specific offset.
   */


  _createClass(ChunkedFileData, [{
    key: 'addData',
    value: function addData(offset, data) {
      var offsetEnd = offset + data.length - 1;
      var chunkRange = this._getChunkRange(offset, offsetEnd);

      if (chunkRange.startIx === NOT_FOUND) {
        this._fileData.splice(chunkRange.insertIx || 0, 0, {
          offset: offset,
          data: data
        });
      } else {
        // If the data to add collides with existing chunks we prepend and
        // append data from the half colliding chunks to make the collision at
        // 100%. The new data can then replace all the colliding chunkes.
        var firstChunk = this._fileData[chunkRange.startIx];
        var lastChunk = this._fileData[chunkRange.endIx];
        var needsPrepend = offset > firstChunk.offset;
        var needsAppend = offsetEnd < lastChunk.offset + lastChunk.data.length - 1;

        var chunk = {
          offset: Math.min(offset, firstChunk.offset),
          data: data
        };

        if (needsPrepend) {
          var slicedData = this._sliceData(firstChunk.data, 0, offset - firstChunk.offset);
          chunk.data = this._concatData(slicedData, data);
        }

        if (needsAppend) {
          // Use the lastChunk because the slice logic is easier to handle.
          var slicedData = this._sliceData(chunk.data, 0, lastChunk.offset - chunk.offset);
          chunk.data = this._concatData(slicedData, lastChunk.data);
        }

        this._fileData.splice(chunkRange.startIx, chunkRange.endIx - chunkRange.startIx + 1, chunk);
      }
    }
  }, {
    key: '_concatData',
    value: function _concatData(dataA, dataB) {
      // TypedArrays don't support concat.
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView && ArrayBuffer.isView(dataA)) {
        // $FlowIssue - flow thinks dataAandB is a string but it's not
        var dataAandB = new dataA.constructor(dataA.length + dataB.length);
        // $FlowIssue - flow thinks dataAandB is a string but it's not
        dataAandB.set(dataA, 0);
        // $FlowIssue - flow thinks dataAandB is a string but it's not
        dataAandB.set(dataB, dataA.length);
        return dataAandB;
      } else {
        // $FlowIssue - flow thinks dataAandB is a TypedArray but it's not
        return dataA.concat(dataB);
      }
    }
  }, {
    key: '_sliceData',
    value: function _sliceData(data, begin, end) {
      // Some TypeArray implementations do not support slice yet.
      if (data.slice) {
        return data.slice(begin, end);
      } else {
        // $FlowIssue - flow thinks data is a string but it's not
        return data.subarray(begin, end);
      }
    }

    /**
     * Finds the chunk range that overlaps the [offsetStart-1,offsetEnd+1] range.
     * When a chunk is adjacent to the offset we still consider it part of the
     * range (this is the situation of offsetStart-1 or offsetEnd+1).
     * When no chunks are found `insertIx` denotes the index where the data
     * should be inserted in the data list (startIx == NOT_FOUND and endIX ==
     * NOT_FOUND).
     */

  }, {
    key: '_getChunkRange',
    value: function _getChunkRange(offsetStart, offsetEnd) {
      var startChunkIx = NOT_FOUND;
      var endChunkIx = NOT_FOUND;
      var insertIx = 0;

      // Could use binary search but not expecting that many blocks to exist.
      for (var i = 0; i < this._fileData.length; i++, insertIx = i) {
        var chunkOffsetStart = this._fileData[i].offset;
        var chunkOffsetEnd = chunkOffsetStart + this._fileData[i].data.length;

        if (offsetEnd < chunkOffsetStart - 1) {
          // This offset range doesn't overlap with any chunks.
          break;
        }
        // If it is adjacent we still consider it part of the range because
        // we're going end up with a single block with all contiguous data.
        if (offsetStart <= chunkOffsetEnd + 1 && offsetEnd >= chunkOffsetStart - 1) {
          startChunkIx = i;
          break;
        }
      }

      // No starting chunk was found, meaning that the offset is either before
      // or after the current stored chunks.
      if (startChunkIx === NOT_FOUND) {
        return {
          startIx: NOT_FOUND,
          endIx: NOT_FOUND,
          insertIx: insertIx
        };
      }

      // Find the ending chunk.
      for (var i = startChunkIx; i < this._fileData.length; i++) {
        var chunkOffsetStart = this._fileData[i].offset;
        var chunkOffsetEnd = chunkOffsetStart + this._fileData[i].data.length;

        if (offsetEnd >= chunkOffsetStart - 1) {
          // Candidate for the end chunk, it doesn't mean it is yet.
          endChunkIx = i;
        }
        if (offsetEnd <= chunkOffsetEnd + 1) {
          break;
        }
      }

      if (endChunkIx === NOT_FOUND) {
        endChunkIx = startChunkIx;
      }

      return {
        startIx: startChunkIx,
        endIx: endChunkIx
      };
    }
  }, {
    key: 'hasDataRange',
    value: function hasDataRange(offsetStart, offsetEnd) {
      for (var i = 0; i < this._fileData.length; i++) {
        var chunk = this._fileData[i];
        if (offsetEnd < chunk.offset) {
          return false;
        }

        if (offsetStart >= chunk.offset && offsetEnd < chunk.offset + chunk.data.length) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: 'getByteAt',
    value: function getByteAt(offset) {
      var dataChunk;

      for (var i = 0; i < this._fileData.length; i++) {
        var dataChunkStart = this._fileData[i].offset;
        var dataChunkEnd = dataChunkStart + this._fileData[i].data.length - 1;

        if (offset >= dataChunkStart && offset <= dataChunkEnd) {
          dataChunk = this._fileData[i];
          break;
        }
      }

      if (dataChunk) {
        return dataChunk.data[offset - dataChunk.offset];
      }

      throw new Error("Offset " + offset + " hasn't been loaded yet.");
    }
  }]);

  return ChunkedFileData;
}();

module.exports = ChunkedFileData;

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaTagReader = require('./MediaTagReader');

/* The first 4 bytes of a FLAC file describes the header for the file. If these
 * bytes respectively read "fLaC", we can determine it is a FLAC file.
 */
var FLAC_HEADER_SIZE = 4;

/* FLAC metadata is stored in blocks containing data ranging from STREAMINFO to
 * VORBIS_COMMENT, which is what we want to work with.
 *
 * Each metadata header is 4 bytes long, with the first byte determining whether
 * it is the last metadata block before the audio data and what the block type is.
 * This first byte can further be split into 8 bits, with the first bit being the
 * last-metadata-block flag, and the last three bits being the block type.
 *
 * Since the specification states that the decimal value for a VORBIS_COMMENT block
 * type is 4, the two possibilities for the comment block header values are:
 * - 00000100 (Not a last metadata comment block, value of 4)
 * - 10000100 (A last metadata comment block, value of 132)
 *
 * Similarly, the picture block header values are 6 and 128.
 *
 * All values for METADATA_BLOCK_HEADER can be found here.
 * https://xiph.org/flac/format.html#metadata_block_header
 */
var COMMENT_HEADERS = [4, 132];
var PICTURE_HEADERS = [6, 134];

// These are the possible image types as defined by the FLAC specification.
var IMAGE_TYPES = ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"];

/**
 * Class representing a MediaTagReader that parses FLAC tags.
 */
var FLACTagReader = function (_MediaTagReader) {
  _inherits(FLACTagReader, _MediaTagReader);

  function FLACTagReader() {
    _classCallCheck(this, FLACTagReader);

    return _possibleConstructorReturn(this, (FLACTagReader.__proto__ || Object.getPrototypeOf(FLACTagReader)).apply(this, arguments));
  }

  _createClass(FLACTagReader, [{
    key: "_loadData",


    /**
     * Function called to load the data from the file.
     *
     * To begin processing the blocks, the next 4 bytes after the initial 4 bytes
     * (bytes 4 through 7) are loaded. From there, the rest of the loading process
     * is passed on to the _loadBlock function, which will handle the rest of the
     * parsing for the metadata blocks.
     *
     * @param {MediaFileReader} mediaFileReader - The MediaFileReader used to parse the file.
     * @param {LoadCallbackType} callbacks - The callback to call once _loadData is completed.
     */
    value: function _loadData(mediaFileReader, callbacks) {
      var self = this;
      mediaFileReader.loadRange([4, 7], {
        onSuccess: function () {
          self._loadBlock(mediaFileReader, 4, callbacks);
        }
      });
    }

    /**
     * Special internal function used to parse the different FLAC blocks.
     *
     * The FLAC specification doesn't specify a specific location for metadata to resign, but
     * dictates that it may be in one of various blocks located throughout the file. To load the
     * metadata, we must locate the header first. This can be done by reading the first byte of
     * each block to determine the block type. After the block type comes a 24 bit integer that stores
     * the length of the block as big endian. Using this, we locate the block and store the offset for
     * parsing later.
     *
     * After each block has been parsed, the _nextBlock function is called in order
     * to parse the information of the next block. All blocks need to be parsed in order to find
     * all of the picture and comment blocks.
     *
     * More info on the FLAC specification may be found here:
     * https://xiph.org/flac/format.html
     * @param {MediaFileReader} mediaFileReader - The MediaFileReader used to parse the file.
     * @param {number} offset - The offset to start checking the header from.
     * @param {LoadCallbackType} callbacks - The callback to call once the header has been found.
     */

  }, {
    key: "_loadBlock",
    value: function _loadBlock(mediaFileReader, offset, callbacks) {
      var self = this;
      /* As mentioned above, this first byte is loaded to see what metadata type
       * this block represents.
       */
      var blockHeader = mediaFileReader.getByteAt(offset);
      /* The last three bytes (integer 24) contain a value representing the length
       * of the following metadata block. The 1 is added in order to shift the offset
       * by one to get the last three bytes in the block header.
       */
      var blockSize = mediaFileReader.getInteger24At(offset + 1, true);
      /* This conditional checks if blockHeader (the byte retrieved representing the
       * type of the header) is one the headers we are looking for.
       *
       * If that is not true, the block is skipped over and the next range is loaded:
       * - offset + 4 + blockSize adds 4 to skip over the initial metadata header and
       * blockSize to skip over the block overall, placing it at the head of the next
       * metadata header.
       * - offset + 4 + 4 + blockSize does the same thing as the previous block with
       * the exception of adding another 4 bytes to move it to the end of the new metadata
       * header.
       */
      if (COMMENT_HEADERS.indexOf(blockHeader) !== -1) {
        /* 4 is added to offset to move it to the head of the actual metadata.
         * The range starting from offsetMatadata (the beginning of the block)
         * and offsetMetadata + blockSize (the end of the block) is loaded.
         */
        var offsetMetadata = offset + 4;
        mediaFileReader.loadRange([offsetMetadata, offsetMetadata + blockSize], {
          onSuccess: function () {
            self._commentOffset = offsetMetadata;
            self._nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks);
          }
        });
      } else if (PICTURE_HEADERS.indexOf(blockHeader) !== -1) {
        var offsetMetadata = offset + 4;
        mediaFileReader.loadRange([offsetMetadata, offsetMetadata + blockSize], {
          onSuccess: function () {
            self._pictureOffset = offsetMetadata;
            self._nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks);
          }
        });
      } else {
        self._nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks);
      }
    }

    /**
     * Internal function used to load the next range and respective block.
     *
     * If the metadata block that was identified is not the last block before the
     * audio blocks, the function will continue loading the next blocks. If it is
     * the last block (identified by any values greater than 127, see FLAC spec.),
     * the function will determine whether a comment block had been identified.
     *
     * If the block does not exist, the error callback is called. Otherwise, the function
     * will call the success callback, allowing data parsing to begin.
     * @param {MediaFileReader} mediaFileReader - The MediaFileReader used to parse the file.
     * @param {number} offset - The offset that the existing header was located at.
     * @param {number} blockHeader - An integer reflecting the header type of the block.
     * @param {number} blockSize - The size of the previously processed header.
     * @param {LoadCallbackType} callbacks - The callback functions to be called.
     */

  }, {
    key: "_nextBlock",
    value: function _nextBlock(mediaFileReader, offset, blockHeader, blockSize, callbacks) {
      var self = this;
      if (blockHeader > 127) {
        if (!self._commentOffset) {
          callbacks.onError({
            "type": "loadData",
            "info": "Comment block could not be found."
          });
        } else {
          callbacks.onSuccess();
        }
      } else {
        mediaFileReader.loadRange([offset + 4 + blockSize, offset + 4 + 4 + blockSize], {
          onSuccess: function () {
            self._loadBlock(mediaFileReader, offset + 4 + blockSize, callbacks);
          }
        });
      }
    }

    /**
     * Parses the data and returns the tags.
     *
     * This is an overview of the VorbisComment format and what this function attempts to
     * retrieve:
     * - First 4 bytes: a long that contains the length of the vendor string.
     * - Next n bytes: the vendor string encoded in UTF-8.
     * - Next 4 bytes: a long representing how many comments are in this block
     * For each comment that exists:
     * - First 4 bytes: a long representing the length of the comment
     * - Next n bytes: the comment encoded in UTF-8.
     * The comment string will usually appear in a format similar to:
     * ARTIST=me
     *
     * Note that the longs and integers in this block are encoded in little endian
     * as opposed to big endian for the rest of the FLAC spec.
     * @param {MediaFileReader} data - The MediaFileReader to parse the file with.
     * @param {Array<string>} [tags] - Optional tags to also be retrieved from the file.
     * @return {TagType} - An object containing the tag information for the file.
     */

  }, {
    key: "_parseData",
    value: function _parseData(data, tags) {
      var vendorLength = data.getLongAt(this._commentOffset, false);
      var offsetVendor = this._commentOffset + 4;
      /* This line is able to retrieve the vendor string that the VorbisComment block
       * contains. However, it is not part of the tags that JSMediaTags normally retrieves,
       * and is therefore commented out.
       */
      // var vendor = data.getStringWithCharsetAt(offsetVendor, vendorLength, "utf-8").toString();
      var offsetList = vendorLength + offsetVendor;
      /* To get the metadata from the block, we first get the long that contains the
       * number of actual comment values that are existent within the block.
       *
       * As we loop through all of the comment blocks, we get the data length in order to
       * get the right size string, and then determine which category that string falls under.
       * The dataOffset variable is constantly updated so that it is at the beginning of the
       * comment that is currently being parsed.
       *
       * Additions of 4 here are used to move the offset past the first 4 bytes which only contain
       * the length of the comment.
       */
      var numComments = data.getLongAt(offsetList, false);
      var dataOffset = offsetList + 4;
      var title, artist, album, track, genre, picture;
      for (var i = 0; i < numComments; i++) {
        var _dataLength = data.getLongAt(dataOffset, false);
        var s = data.getStringWithCharsetAt(dataOffset + 4, _dataLength, "utf-8").toString();
        var d = s.indexOf("=");
        var split = [s.slice(0, d), s.slice(d + 1)];
        switch (split[0]) {
          case "TITLE":
            title = split[1];
            break;
          case "ARTIST":
            artist = split[1];
            break;
          case "ALBUM":
            album = split[1];
            break;
          case "TRACKNUMBER":
            track = split[1];
            break;
          case "GENRE":
            genre = split[1];
            break;
        }
        dataOffset += 4 + _dataLength;
      }

      /* If a picture offset was found and assigned, then the reader will start processing
       * the picture block from that point.
       *
       * All the lengths for the picture data can be found online here:
       * https://xiph.org/flac/format.html#metadata_block_picture
       */
      if (this._pictureOffset) {
        var imageType = data.getLongAt(this._pictureOffset, true);
        var offsetMimeLength = this._pictureOffset + 4;
        var mimeLength = data.getLongAt(offsetMimeLength, true);
        var offsetMime = offsetMimeLength + 4;
        var mime = data.getStringAt(offsetMime, mimeLength);
        var offsetDescriptionLength = offsetMime + mimeLength;
        var descriptionLength = data.getLongAt(offsetDescriptionLength, true);
        var offsetDescription = offsetDescriptionLength + 4;
        var description = data.getStringWithCharsetAt(offsetDescription, descriptionLength, "utf-8").toString();
        var offsetDataLength = offsetDescription + descriptionLength + 16;
        var dataLength = data.getLongAt(offsetDataLength, true);
        var offsetData = offsetDataLength + 4;
        var imageData = data.getBytesAt(offsetData, dataLength, true);
        picture = {
          format: mime,
          type: IMAGE_TYPES[imageType],
          description: description,
          data: imageData
        };
      }

      var tag = {
        type: "FLAC",
        version: "1",
        tags: {
          "title": title,
          "artist": artist,
          "album": album,
          "track": track,
          "genre": genre,
          "picture": picture
        }
      };
      return tag;
    }
  }], [{
    key: "getTagIdentifierByteRange",


    /**
     * Gets the byte range for the tag identifier.
     *
     * Because the Vorbis comment block is not guaranteed to be in a specified
     * location, we can only load the first 4 bytes of the file to confirm it
     * is a FLAC first.
     *
     * @return {ByteRange} The byte range that identifies the tag for a FLAC.
     */
    value: function getTagIdentifierByteRange() {
      return {
        offset: 0,
        length: FLAC_HEADER_SIZE
      };
    }

    /**
     * Determines whether or not this reader can read a certain tag format.
     *
     * This checks that the first 4 characters in the file are fLaC, which
     * according to the FLAC file specification should be the characters that
     * indicate a FLAC file.
     *
     * @return {boolean} True if the header is fLaC, false otherwise.
     */

  }, {
    key: "canReadTagFormat",
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(0, 4));
      return id === 'fLaC';
    }
  }]);

  return FLACTagReader;
}(MediaTagReader);

module.exports = FLACTagReader;

},{"./MediaTagReader":12}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaTagReader = require('./MediaTagReader');
var MediaFileReader = require('./MediaFileReader');

var ID3v1TagReader = function (_MediaTagReader) {
  _inherits(ID3v1TagReader, _MediaTagReader);

  function ID3v1TagReader() {
    _classCallCheck(this, ID3v1TagReader);

    return _possibleConstructorReturn(this, (ID3v1TagReader.__proto__ || Object.getPrototypeOf(ID3v1TagReader)).apply(this, arguments));
  }

  _createClass(ID3v1TagReader, [{
    key: '_loadData',
    value: function _loadData(mediaFileReader, callbacks) {
      var fileSize = mediaFileReader.getSize();
      mediaFileReader.loadRange([fileSize - 128, fileSize - 1], callbacks);
    }
  }, {
    key: '_parseData',
    value: function _parseData(data, tags) {
      var offset = data.getSize() - 128;

      var title = data.getStringWithCharsetAt(offset + 3, 30).toString();
      var artist = data.getStringWithCharsetAt(offset + 33, 30).toString();
      var album = data.getStringWithCharsetAt(offset + 63, 30).toString();
      var year = data.getStringWithCharsetAt(offset + 93, 4).toString();

      var trackFlag = data.getByteAt(offset + 97 + 28);
      var track = data.getByteAt(offset + 97 + 29);
      if (trackFlag == 0 && track != 0) {
        var version = "1.1";
        var comment = data.getStringWithCharsetAt(offset + 97, 28).toString();
      } else {
        var version = "1.0";
        var comment = data.getStringWithCharsetAt(offset + 97, 30).toString();
        track = 0;
      }

      var genreIdx = data.getByteAt(offset + 97 + 30);
      if (genreIdx < 255) {
        var genre = GENRES[genreIdx];
      } else {
        var genre = "";
      }

      var tag = {
        "type": "ID3",
        "version": version,
        "tags": {
          "title": title,
          "artist": artist,
          "album": album,
          "year": year,
          "comment": comment,
          "genre": genre
        }
      };

      if (track) {
        // $FlowIssue - flow is not happy with adding properties
        tag.tags.track = track;
      }

      return tag;
    }
  }], [{
    key: 'getTagIdentifierByteRange',
    value: function getTagIdentifierByteRange() {
      // The identifier is TAG and is at offset: -128. However, to avoid a
      // fetch for the tag identifier and another for the data, we load the
      // entire data since it's so small.
      return {
        offset: -128,
        length: 128
      };
    }
  }, {
    key: 'canReadTagFormat',
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(0, 3));
      return id === "TAG";
    }
  }]);

  return ID3v1TagReader;
}(MediaTagReader);

var GENRES = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "Acapella", "Euro-House", "Dance Hall"];

module.exports = ID3v1TagReader;

},{"./MediaFileReader":11,"./MediaTagReader":12}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaFileReader = require('./MediaFileReader');
var StringUtils = require('./StringUtils');
var ArrayFileReader = require('./ArrayFileReader');

var FRAME_DESCRIPTIONS = {
  // v2.2
  "BUF": "Recommended buffer size",
  "CNT": "Play counter",
  "COM": "Comments",
  "CRA": "Audio encryption",
  "CRM": "Encrypted meta frame",
  "ETC": "Event timing codes",
  "EQU": "Equalization",
  "GEO": "General encapsulated object",
  "IPL": "Involved people list",
  "LNK": "Linked information",
  "MCI": "Music CD Identifier",
  "MLL": "MPEG location lookup table",
  "PIC": "Attached picture",
  "POP": "Popularimeter",
  "REV": "Reverb",
  "RVA": "Relative volume adjustment",
  "SLT": "Synchronized lyric/text",
  "STC": "Synced tempo codes",
  "TAL": "Album/Movie/Show title",
  "TBP": "BPM (Beats Per Minute)",
  "TCM": "Composer",
  "TCO": "Content type",
  "TCR": "Copyright message",
  "TDA": "Date",
  "TDY": "Playlist delay",
  "TEN": "Encoded by",
  "TFT": "File type",
  "TIM": "Time",
  "TKE": "Initial key",
  "TLA": "Language(s)",
  "TLE": "Length",
  "TMT": "Media type",
  "TOA": "Original artist(s)/performer(s)",
  "TOF": "Original filename",
  "TOL": "Original Lyricist(s)/text writer(s)",
  "TOR": "Original release year",
  "TOT": "Original album/Movie/Show title",
  "TP1": "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
  "TP2": "Band/Orchestra/Accompaniment",
  "TP3": "Conductor/Performer refinement",
  "TP4": "Interpreted, remixed, or otherwise modified by",
  "TPA": "Part of a set",
  "TPB": "Publisher",
  "TRC": "ISRC (International Standard Recording Code)",
  "TRD": "Recording dates",
  "TRK": "Track number/Position in set",
  "TSI": "Size",
  "TSS": "Software/hardware and settings used for encoding",
  "TT1": "Content group description",
  "TT2": "Title/Songname/Content description",
  "TT3": "Subtitle/Description refinement",
  "TXT": "Lyricist/text writer",
  "TXX": "User defined text information frame",
  "TYE": "Year",
  "UFI": "Unique file identifier",
  "ULT": "Unsychronized lyric/text transcription",
  "WAF": "Official audio file webpage",
  "WAR": "Official artist/performer webpage",
  "WAS": "Official audio source webpage",
  "WCM": "Commercial information",
  "WCP": "Copyright/Legal information",
  "WPB": "Publishers official webpage",
  "WXX": "User defined URL link frame",
  // v2.3
  "AENC": "Audio encryption",
  "APIC": "Attached picture",
  "ASPI": "Audio seek point index",
  "CHAP": "Chapter",
  "CTOC": "Table of contents",
  "COMM": "Comments",
  "COMR": "Commercial frame",
  "ENCR": "Encryption method registration",
  "EQU2": "Equalisation (2)",
  "EQUA": "Equalization",
  "ETCO": "Event timing codes",
  "GEOB": "General encapsulated object",
  "GRID": "Group identification registration",
  "IPLS": "Involved people list",
  "LINK": "Linked information",
  "MCDI": "Music CD identifier",
  "MLLT": "MPEG location lookup table",
  "OWNE": "Ownership frame",
  "PRIV": "Private frame",
  "PCNT": "Play counter",
  "POPM": "Popularimeter",
  "POSS": "Position synchronisation frame",
  "RBUF": "Recommended buffer size",
  "RVA2": "Relative volume adjustment (2)",
  "RVAD": "Relative volume adjustment",
  "RVRB": "Reverb",
  "SEEK": "Seek frame",
  "SYLT": "Synchronized lyric/text",
  "SYTC": "Synchronized tempo codes",
  "TALB": "Album/Movie/Show title",
  "TBPM": "BPM (beats per minute)",
  "TCOM": "Composer",
  "TCON": "Content type",
  "TCOP": "Copyright message",
  "TDAT": "Date",
  "TDLY": "Playlist delay",
  "TDRC": "Recording time",
  "TDRL": "Release time",
  "TDTG": "Tagging time",
  "TENC": "Encoded by",
  "TEXT": "Lyricist/Text writer",
  "TFLT": "File type",
  "TIME": "Time",
  "TIPL": "Involved people list",
  "TIT1": "Content group description",
  "TIT2": "Title/songname/content description",
  "TIT3": "Subtitle/Description refinement",
  "TKEY": "Initial key",
  "TLAN": "Language(s)",
  "TLEN": "Length",
  "TMCL": "Musician credits list",
  "TMED": "Media type",
  "TMOO": "Mood",
  "TOAL": "Original album/movie/show title",
  "TOFN": "Original filename",
  "TOLY": "Original lyricist(s)/text writer(s)",
  "TOPE": "Original artist(s)/performer(s)",
  "TORY": "Original release year",
  "TOWN": "File owner/licensee",
  "TPE1": "Lead performer(s)/Soloist(s)",
  "TPE2": "Band/orchestra/accompaniment",
  "TPE3": "Conductor/performer refinement",
  "TPE4": "Interpreted, remixed, or otherwise modified by",
  "TPOS": "Part of a set",
  "TPRO": "Produced notice",
  "TPUB": "Publisher",
  "TRCK": "Track number/Position in set",
  "TRDA": "Recording dates",
  "TRSN": "Internet radio station name",
  "TRSO": "Internet radio station owner",
  "TSOA": "Album sort order",
  "TSOP": "Performer sort order",
  "TSOT": "Title sort order",
  "TSIZ": "Size",
  "TSRC": "ISRC (international standard recording code)",
  "TSSE": "Software/Hardware and settings used for encoding",
  "TSST": "Set subtitle",
  "TYER": "Year",
  "TXXX": "User defined text information frame",
  "UFID": "Unique file identifier",
  "USER": "Terms of use",
  "USLT": "Unsychronized lyric/text transcription",
  "WCOM": "Commercial information",
  "WCOP": "Copyright/Legal information",
  "WOAF": "Official audio file webpage",
  "WOAR": "Official artist/performer webpage",
  "WOAS": "Official audio source webpage",
  "WORS": "Official internet radio station homepage",
  "WPAY": "Payment",
  "WPUB": "Publishers official webpage",
  "WXXX": "User defined URL link frame"
};

var ID3v2FrameReader = function () {
  function ID3v2FrameReader() {
    _classCallCheck(this, ID3v2FrameReader);
  }

  _createClass(ID3v2FrameReader, null, [{
    key: 'getFrameReaderFunction',
    value: function getFrameReaderFunction(frameId) {
      if (frameId in frameReaderFunctions) {
        return frameReaderFunctions[frameId];
      } else if (frameId[0] === "T") {
        // All frame ids starting with T are text tags.
        return frameReaderFunctions["T*"];
      } else if (frameId[0] === "W") {
        // All frame ids starting with W are url tags.
        return frameReaderFunctions["W*"];
      } else {
        return null;
      }
    }
    /**
     * All the frames consists of a frame header followed by one or more fields
     * containing the actual information.
     * The frame ID made out of the characters capital A-Z and 0-9. Identifiers
     * beginning with "X", "Y" and "Z" are for experimental use and free for
     * everyone to use, without the need to set the experimental bit in the tag
     * header. Have in mind that someone else might have used the same identifier
     * as you. All other identifiers are either used or reserved for future use.
     * The frame ID is followed by a size descriptor, making a total header size
     * of ten bytes in every frame. The size is calculated as frame size excluding
     * frame header (frame size - 10).
     */

  }, {
    key: 'readFrames',
    value: function readFrames(offset, end, data, id3header, tags) {
      var frames = {};
      var frameHeaderSize = this._getFrameHeaderSize(id3header);
      // console.log('header', id3header);
      while (
      // we should be able to read at least the frame header
      offset < end - frameHeaderSize) {
        var header = this._readFrameHeader(data, offset, id3header);
        var frameId = header.id;

        // No frame ID sometimes means it's the last frame (GTFO).
        if (!frameId) {
          break;
        }

        var flags = header.flags;
        var frameSize = header.size;
        var frameDataOffset = offset + header.headerSize;
        var frameData = data;

        // console.log(offset, frameId, header.size + header.headerSize, flags && flags.format.unsynchronisation);
        // advance data offset to the next frame data
        offset += header.headerSize + header.size;

        // skip unwanted tags
        if (tags && tags.indexOf(frameId) === -1) {
          continue;
        }
        // Workaround: MP3ext V3.3.17 places a non-compliant padding string at
        // the end of the ID3v2 header. A string like "MP3ext V3.3.19(ansi)"
        // is added multiple times at the end of the ID3 tag. More information
        // about this issue can be found at
        // https://github.com/aadsm/jsmediatags/issues/58#issuecomment-313865336
        if (frameId === 'MP3e' || frameId === '\x00MP3' || frameId === '\x00\x00MP' || frameId === ' MP3') {
          break;
        }

        var unsyncData;
        if (flags && flags.format.unsynchronisation) {
          frameData = this.getUnsyncFileReader(frameData, frameDataOffset, frameSize);
          frameDataOffset = 0;
          frameSize = frameData.getSize();
        }

        // the first 4 bytes are the real data size
        // (after unsynchronisation && encryption)
        if (flags && flags.format.data_length_indicator) {
          // var frameDataSize = frameData.getSynchsafeInteger32At(frameDataOffset);
          frameDataOffset += 4;
          frameSize -= 4;
        }

        var readFrameFunc = ID3v2FrameReader.getFrameReaderFunction(frameId);
        var parsedData = readFrameFunc ? readFrameFunc.apply(this, [frameDataOffset, frameSize, frameData, flags, id3header]) : null;
        var desc = this._getFrameDescription(frameId);

        var frame = {
          id: frameId,
          size: frameSize,
          description: desc,
          data: parsedData
        };

        if (frameId in frames) {
          if (frames[frameId].id) {
            frames[frameId] = [frames[frameId]];
          }
          frames[frameId].push(frame);
        } else {
          frames[frameId] = frame;
        }
      }

      return frames;
    }
  }, {
    key: '_getFrameHeaderSize',
    value: function _getFrameHeaderSize(id3header) {
      var major = id3header.major;

      if (major == 2) {
        return 6;
      } else if (major == 3 || major == 4) {
        return 10;
      } else {
        return 0;
      }
    }
  }, {
    key: '_readFrameHeader',
    value: function _readFrameHeader(data, offset, id3header) {
      var major = id3header.major;
      var flags = null;
      var frameHeaderSize = this._getFrameHeaderSize(id3header);

      switch (major) {
        case 2:
          var frameId = data.getStringAt(offset, 3);
          var frameSize = data.getInteger24At(offset + 3, true);
          break;

        case 3:
          var frameId = data.getStringAt(offset, 4);
          var frameSize = data.getLongAt(offset + 4, true);
          break;

        case 4:
          var frameId = data.getStringAt(offset, 4);
          var frameSize = data.getSynchsafeInteger32At(offset + 4);
          break;
      }

      if (frameId == String.fromCharCode(0, 0, 0) || frameId == String.fromCharCode(0, 0, 0, 0)) {
        frameId = "";
      }

      // if frameId is empty then it's the last frame
      if (frameId) {
        // read frame message and format flags
        if (major > 2) {
          flags = this._readFrameFlags(data, offset + 8);
        }
      }

      return {
        "id": frameId || "",
        "size": frameSize || 0,
        "headerSize": frameHeaderSize || 0,
        "flags": flags
      };
    }
  }, {
    key: '_readFrameFlags',
    value: function _readFrameFlags(data, offset) {
      return {
        message: {
          tag_alter_preservation: data.isBitSetAt(offset, 6),
          file_alter_preservation: data.isBitSetAt(offset, 5),
          read_only: data.isBitSetAt(offset, 4)
        },
        format: {
          grouping_identity: data.isBitSetAt(offset + 1, 7),
          compression: data.isBitSetAt(offset + 1, 3),
          encryption: data.isBitSetAt(offset + 1, 2),
          unsynchronisation: data.isBitSetAt(offset + 1, 1),
          data_length_indicator: data.isBitSetAt(offset + 1, 0)
        }
      };
    }
  }, {
    key: '_getFrameDescription',
    value: function _getFrameDescription(frameId) {
      if (frameId in FRAME_DESCRIPTIONS) {
        return FRAME_DESCRIPTIONS[frameId];
      } else {
        return 'Unknown';
      }
    }
  }, {
    key: 'getUnsyncFileReader',
    value: function getUnsyncFileReader(data, offset, size) {
      var frameData = data.getBytesAt(offset, size);
      for (var i = 0; i < frameData.length - 1; i++) {
        if (frameData[i] === 0xff && frameData[i + 1] === 0x00) {
          frameData.splice(i + 1, 1);
        }
      }

      return new ArrayFileReader(frameData);
    }
  }]);

  return ID3v2FrameReader;
}();

;

var frameReaderFunctions = {};

frameReaderFunctions['APIC'] = function readPictureFrame(offset, length, data, flags, id3header) {
  var start = offset;
  var charset = getTextEncoding(data.getByteAt(offset));
  switch (id3header && id3header.major) {
    case 2:
      var format = data.getStringAt(offset + 1, 3);
      offset += 4;
      break;

    case 3:
    case 4:
      var format = data.getStringWithCharsetAt(offset + 1, length - 1);
      offset += 1 + format.bytesReadCount;
      break;

    default:
      throw new Error("Couldn't read ID3v2 major version.");
  }
  var bite = data.getByteAt(offset);
  var type = PICTURE_TYPE[bite];
  var desc = data.getStringWithCharsetAt(offset + 1, length - (offset - start) - 1, charset);

  offset += 1 + desc.bytesReadCount;

  return {
    "format": format.toString(),
    "type": type,
    "description": desc.toString(),
    "data": data.getBytesAt(offset, start + length - offset)
  };
};

// ID3v2 chapters according to http://id3.org/id3v2-chapters-1.0
frameReaderFunctions['CHAP'] = function readChapterFrame(offset, length, data, flags, id3header) {
  var originalOffset = offset;
  var result = {};
  var id = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length));
  result.id = id.toString();
  offset += id.bytesReadCount;
  result.startTime = data.getLongAt(offset, true);
  offset += 4;
  result.endTime = data.getLongAt(offset, true);
  offset += 4;
  result.startOffset = data.getLongAt(offset, true);
  offset += 4;
  result.endOffset = data.getLongAt(offset, true);
  offset += 4;

  var remainingLength = length - (offset - originalOffset);
  result.subFrames = this.readFrames(offset, offset + remainingLength, data, id3header);
  return result;
};

// ID3v2 table of contents according to http://id3.org/id3v2-chapters-1.0
frameReaderFunctions['CTOC'] = function readTableOfContentsFrame(offset, length, data, flags, id3header) {
  var originalOffset = offset;
  var result = { childElementIds: [], id: undefined, topLevel: undefined, ordered: undefined, entryCount: undefined, subFrames: undefined };
  var id = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length));
  result.id = id.toString();
  offset += id.bytesReadCount;
  result.topLevel = data.isBitSetAt(offset, 1);
  result.ordered = data.isBitSetAt(offset, 0);
  offset++;
  result.entryCount = data.getByteAt(offset);
  offset++;
  for (var i = 0; i < result.entryCount; i++) {
    var childId = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length - (offset - originalOffset)));
    result.childElementIds.push(childId.toString());
    offset += childId.bytesReadCount;
  }

  var remainingLength = length - (offset - originalOffset);
  result.subFrames = this.readFrames(offset, offset + remainingLength, data, id3header);
  return result;
};

frameReaderFunctions['COMM'] = function readCommentsFrame(offset, length, data, flags, id3header) {
  var start = offset;
  var charset = getTextEncoding(data.getByteAt(offset));
  var language = data.getStringAt(offset + 1, 3);
  var shortdesc = data.getStringWithCharsetAt(offset + 4, length - 4, charset);

  offset += 4 + shortdesc.bytesReadCount;
  var text = data.getStringWithCharsetAt(offset, start + length - offset, charset);

  return {
    language: language,
    short_description: shortdesc.toString(),
    text: text.toString()
  };
};

frameReaderFunctions['COM'] = frameReaderFunctions['COMM'];

frameReaderFunctions['PIC'] = function (offset, length, data, flags, id3header) {
  return frameReaderFunctions['APIC'](offset, length, data, flags, id3header);
};

frameReaderFunctions['PCNT'] = function readCounterFrame(offset, length, data, flags, id3header) {
  // FIXME: implement the rest of the spec
  return data.getLongAt(offset, false);
};

frameReaderFunctions['CNT'] = frameReaderFunctions['PCNT'];

frameReaderFunctions['T*'] = function readTextFrame(offset, length, data, flags, id3header) {
  var charset = getTextEncoding(data.getByteAt(offset));

  return data.getStringWithCharsetAt(offset + 1, length - 1, charset).toString();
};

frameReaderFunctions['TXXX'] = function readTextFrame(offset, length, data, flags, id3header) {
  var charset = getTextEncoding(data.getByteAt(offset));

  return getUserDefinedFields(offset, length, data, charset);
};

frameReaderFunctions['WXXX'] = function readUrlFrame(offset, length, data, flags, id3header) {
  if (length === 0) {
    return null;
  }
  var charset = getTextEncoding(data.getByteAt(offset));
  return getUserDefinedFields(offset, length, data, charset);
};

frameReaderFunctions['W*'] = function readUrlFrame(offset, length, data, flags, id3header) {
  if (length === 0) {
    return null;
  }
  return data.getStringWithCharsetAt(offset, length, 'iso-8859-1').toString();
};

frameReaderFunctions['TCON'] = function readGenreFrame(offset, length, data, flags) {
  var text = frameReaderFunctions['T*'].apply(this, arguments);
  return text.replace(/^\(\d+\)/, '');
};

frameReaderFunctions['TCO'] = frameReaderFunctions['TCON'];

frameReaderFunctions['USLT'] = function readLyricsFrame(offset, length, data, flags, id3header) {
  var start = offset;
  var charset = getTextEncoding(data.getByteAt(offset));
  var language = data.getStringAt(offset + 1, 3);
  var descriptor = data.getStringWithCharsetAt(offset + 4, length - 4, charset);

  offset += 4 + descriptor.bytesReadCount;
  var lyrics = data.getStringWithCharsetAt(offset, start + length - offset, charset);

  return {
    language: language,
    descriptor: descriptor.toString(),
    lyrics: lyrics.toString()
  };
};

frameReaderFunctions['ULT'] = frameReaderFunctions['USLT'];

frameReaderFunctions['UFID'] = function readLyricsFrame(offset, length, data, flags, id3header) {
  var ownerIdentifier = StringUtils.readNullTerminatedString(data.getBytesAt(offset, length));
  offset += ownerIdentifier.bytesReadCount;
  var identifier = data.getBytesAt(offset, length - ownerIdentifier.bytesReadCount);

  return {
    ownerIdentifier: ownerIdentifier.toString(),
    identifier: identifier
  };
};

function getTextEncoding(bite) {
  var charset;

  switch (bite) {
    case 0x00:
      charset = 'iso-8859-1';
      break;

    case 0x01:
      charset = 'utf-16';
      break;

    case 0x02:
      charset = 'utf-16be';
      break;

    case 0x03:
      charset = 'utf-8';
      break;

    default:
      charset = 'iso-8859-1';
  }

  return charset;
}

// Handles reading description/data from either http://id3.org/id3v2.3.0#User_defined_text_information_frame
// and http://id3.org/id3v2.3.0#User_defined_URL_link_frame
function getUserDefinedFields(offset, length, data, charset) {
  var userDesc = data.getStringWithCharsetAt(offset + 1, length - 1, charset);
  var userDefinedData = data.getStringWithCharsetAt(offset + 1 + userDesc.bytesReadCount, length - 1 - userDesc.bytesReadCount);

  return {
    user_description: userDesc.toString(),
    data: userDefinedData.toString()
  };
}

var PICTURE_TYPE = ["Other", "32x32 pixels 'file icon' (PNG only)", "Other file icon", "Cover (front)", "Cover (back)", "Leaflet page", "Media (e.g. label side of CD)", "Lead artist/lead performer/soloist", "Artist/performer", "Conductor", "Band/Orchestra", "Composer", "Lyricist/text writer", "Recording Location", "During recording", "During performance", "Movie/video screen capture", "A bright coloured fish", "Illustration", "Band/artist logotype", "Publisher/Studio logotype"];

module.exports = ID3v2FrameReader;

},{"./ArrayFileReader":3,"./MediaFileReader":11,"./StringUtils":13}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaTagReader = require('./MediaTagReader');
var MediaFileReader = require('./MediaFileReader');
var ID3v2FrameReader = require('./ID3v2FrameReader');

var ID3_HEADER_SIZE = 10;

var ID3v2TagReader = function (_MediaTagReader) {
  _inherits(ID3v2TagReader, _MediaTagReader);

  function ID3v2TagReader() {
    _classCallCheck(this, ID3v2TagReader);

    return _possibleConstructorReturn(this, (ID3v2TagReader.__proto__ || Object.getPrototypeOf(ID3v2TagReader)).apply(this, arguments));
  }

  _createClass(ID3v2TagReader, [{
    key: '_loadData',
    value: function _loadData(mediaFileReader, callbacks) {
      mediaFileReader.loadRange([6, 9], {
        onSuccess: function () {
          mediaFileReader.loadRange(
          // The tag size does not include the header size.
          [0, ID3_HEADER_SIZE + mediaFileReader.getSynchsafeInteger32At(6) - 1], callbacks);
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: '_parseData',
    value: function _parseData(data, tags) {
      var offset = 0;
      var major = data.getByteAt(offset + 3);
      if (major > 4) {
        return { "type": "ID3", "version": ">2.4", "tags": {} };
      }
      var revision = data.getByteAt(offset + 4);
      var unsynch = data.isBitSetAt(offset + 5, 7);
      var xheader = data.isBitSetAt(offset + 5, 6);
      var xindicator = data.isBitSetAt(offset + 5, 5);
      var size = data.getSynchsafeInteger32At(offset + 6);
      offset += 10;

      if (xheader) {
        // TODO: support 2.4
        var xheadersize = data.getLongAt(offset, true);
        // The 'Extended header size', currently 6 or 10 bytes, excludes itself.
        offset += xheadersize + 4;
      }

      var id3 = {
        "type": "ID3",
        "version": '2.' + major + '.' + revision,
        "major": major,
        "revision": revision,
        "flags": {
          "unsynchronisation": unsynch,
          "extended_header": xheader,
          "experimental_indicator": xindicator,
          // TODO: footer_present
          "footer_present": false
        },
        "size": size,
        "tags": {}
      };

      if (tags) {
        var expandedTags = this._expandShortcutTags(tags);
      }

      var offsetEnd = size + 10 /*header size*/;
      // When this flag is set the entire tag needs to be un-unsynchronised
      // before parsing each individual frame. Individual frame sizes might not
      // take unsynchronisation into consideration when it's set on the tag
      // header.
      if (id3.flags.unsynchronisation) {
        data = ID3v2FrameReader.getUnsyncFileReader(data, offset, size);
        offset = 0;
        offsetEnd = data.getSize();
      }

      var frames = ID3v2FrameReader.readFrames(offset, offsetEnd, data, id3, expandedTags);
      // create shortcuts for most common data.
      for (var name in SHORTCUTS) {
        if (SHORTCUTS.hasOwnProperty(name)) {
          var frameData = this._getFrameData(frames, SHORTCUTS[name]);
          if (frameData) {
            id3.tags[name] = frameData;
          }
        }
      }for (var frame in frames) {
        if (frames.hasOwnProperty(frame)) {
          id3.tags[frame] = frames[frame];
        }
      }return id3;
    }
  }, {
    key: '_getFrameData',
    value: function _getFrameData(frames, ids) {
      var frame;
      for (var i = 0, id; id = ids[i]; i++) {
        if (id in frames) {
          if (frames[id] instanceof Array) {
            frame = frames[id][0];
          } else {
            frame = frames[id];
          }
          return frame.data;
        }
      }
    }
  }, {
    key: 'getShortcuts',
    value: function getShortcuts() {
      return SHORTCUTS;
    }
  }], [{
    key: 'getTagIdentifierByteRange',
    value: function getTagIdentifierByteRange() {
      // ID3 header
      return {
        offset: 0,
        length: ID3_HEADER_SIZE
      };
    }
  }, {
    key: 'canReadTagFormat',
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(0, 3));
      return id === 'ID3';
    }
  }]);

  return ID3v2TagReader;
}(MediaTagReader);

var SHORTCUTS = {
  "title": ["TIT2", "TT2"],
  "artist": ["TPE1", "TP1"],
  "album": ["TALB", "TAL"],
  "year": ["TYER", "TYE"],
  "comment": ["COMM", "COM"],
  "track": ["TRCK", "TRK"],
  "genre": ["TCON", "TCO"],
  "picture": ["APIC", "PIC"],
  "lyrics": ["USLT", "ULT"]
};

module.exports = ID3v2TagReader;

},{"./ID3v2FrameReader":8,"./MediaFileReader":11,"./MediaTagReader":12}],10:[function(require,module,exports){
/**
 * Support for iTunes-style m4a tags
 * See:
 *   http://atomicparsley.sourceforge.net/mpeg-4files.html
 *   http://developer.apple.com/mac/library/documentation/QuickTime/QTFF/Metadata/Metadata.html
 * Authored by Joshua Kifer <joshua.kifer gmail.com>
 * 
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaTagReader = require('./MediaTagReader');
var MediaFileReader = require('./MediaFileReader');

var MP4TagReader = function (_MediaTagReader) {
  _inherits(MP4TagReader, _MediaTagReader);

  function MP4TagReader() {
    _classCallCheck(this, MP4TagReader);

    return _possibleConstructorReturn(this, (MP4TagReader.__proto__ || Object.getPrototypeOf(MP4TagReader)).apply(this, arguments));
  }

  _createClass(MP4TagReader, [{
    key: '_loadData',
    value: function _loadData(mediaFileReader, callbacks) {
      // MP4 metadata isn't located in a specific location of the file. Roughly
      // speaking, it's composed of blocks chained together like a linked list.
      // These blocks are called atoms (or boxes).
      // Each atom of the list can have its own child linked list. Atoms in this
      // situation do not possess any data and are called "container" as they only
      // contain other atoms.
      // Other atoms represent a particular set of data, like audio, video or
      // metadata. In order to find and load all the interesting atoms we need
      // to traverse the entire linked list of atoms and only load the ones
      // associated with metadata.
      // The metadata atoms can be find under the "moov.udta.meta.ilst" hierarchy.

      var self = this;
      // Load the header of the first atom
      mediaFileReader.loadRange([0, 16], {
        onSuccess: function () {
          self._loadAtom(mediaFileReader, 0, "", callbacks);
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: '_loadAtom',
    value: function _loadAtom(mediaFileReader, offset, parentAtomFullName, callbacks) {
      if (offset >= mediaFileReader.getSize()) {
        callbacks.onSuccess();
        return;
      }

      var self = this;
      // 8 is the size of the atomSize and atomName fields.
      // When reading the current block we always read 8 more bytes in order
      // to also read the header of the next block.
      var atomSize = mediaFileReader.getLongAt(offset, true);
      if (atomSize == 0 || isNaN(atomSize)) {
        callbacks.onSuccess();
        return;
      }
      var atomName = mediaFileReader.getStringAt(offset + 4, 4);
      // console.log(parentAtomFullName, atomName, atomSize);
      // Container atoms (no actual data)
      if (this._isContainerAtom(atomName)) {
        if (atomName == "meta") {
          // The "meta" atom breaks convention and is a container with data.
          offset += 4; // next_item_id (uint32)
        }
        var atomFullName = (parentAtomFullName ? parentAtomFullName + "." : "") + atomName;
        if (atomFullName === "moov.udta.meta.ilst") {
          mediaFileReader.loadRange([offset, offset + atomSize], callbacks);
        } else {
          mediaFileReader.loadRange([offset + 8, offset + 8 + 8], {
            onSuccess: function () {
              self._loadAtom(mediaFileReader, offset + 8, atomFullName, callbacks);
            },
            onError: callbacks.onError
          });
        }
      } else {
        mediaFileReader.loadRange([offset + atomSize, offset + atomSize + 8], {
          onSuccess: function () {
            self._loadAtom(mediaFileReader, offset + atomSize, parentAtomFullName, callbacks);
          },
          onError: callbacks.onError
        });
      }
    }
  }, {
    key: '_isContainerAtom',
    value: function _isContainerAtom(atomName) {
      return ["moov", "udta", "meta", "ilst"].indexOf(atomName) >= 0;
    }
  }, {
    key: '_canReadAtom',
    value: function _canReadAtom(atomName) {
      return atomName !== "----";
    }
  }, {
    key: '_parseData',
    value: function _parseData(data, tagsToRead) {
      var tags = {};

      tagsToRead = this._expandShortcutTags(tagsToRead);
      this._readAtom(tags, data, 0, data.getSize(), tagsToRead);

      // create shortcuts for most common data.
      for (var name in SHORTCUTS) {
        if (SHORTCUTS.hasOwnProperty(name)) {
          var tag = tags[SHORTCUTS[name]];
          if (tag) {
            if (name === "track") {
              tags[name] = tag.data.track;
            } else {
              tags[name] = tag.data;
            }
          }
        }
      }return {
        "type": "MP4",
        "ftyp": data.getStringAt(8, 4),
        "version": data.getLongAt(12, true),
        "tags": tags
      };
    }
  }, {
    key: '_readAtom',
    value: function _readAtom(tags, data, offset, length, tagsToRead, parentAtomFullName, indent) {
      indent = indent === undefined ? "" : indent + "  ";

      var seek = offset;
      while (seek < offset + length) {
        var atomSize = data.getLongAt(seek, true);
        if (atomSize == 0) {
          return;
        }
        var atomName = data.getStringAt(seek + 4, 4);

        // console.log(seek, parentAtomFullName, atomName, atomSize);
        if (this._isContainerAtom(atomName)) {
          if (atomName == "meta") {
            seek += 4; // next_item_id (uint32)
          }
          var atomFullName = (parentAtomFullName ? parentAtomFullName + "." : "") + atomName;
          this._readAtom(tags, data, seek + 8, atomSize - 8, tagsToRead, atomFullName, indent);
          return;
        }

        // Value atoms
        if ((!tagsToRead || tagsToRead.indexOf(atomName) >= 0) && parentAtomFullName === "moov.udta.meta.ilst" && this._canReadAtom(atomName)) {
          tags[atomName] = this._readMetadataAtom(data, seek);
        }

        seek += atomSize;
      }
    }
  }, {
    key: '_readMetadataAtom',
    value: function _readMetadataAtom(data, offset) {
      // 16: name + size + "data" + size (4 bytes each)
      var METADATA_HEADER = 16;

      var atomSize = data.getLongAt(offset, true);
      var atomName = data.getStringAt(offset + 4, 4);

      var klass = data.getInteger24At(offset + METADATA_HEADER + 1, true);
      var type = TYPES[klass];
      var atomData;

      if (atomName == "trkn") {
        atomData = {
          "track": data.getByteAt(offset + METADATA_HEADER + 11),
          "total": data.getByteAt(offset + METADATA_HEADER + 13)
        };
      } else if (atomName == "disk") {
        atomData = {
          "disk": data.getByteAt(offset + METADATA_HEADER + 11),
          "total": data.getByteAt(offset + METADATA_HEADER + 13)
        };
      } else {
        // 4: atom version (1 byte) + atom flags (3 bytes)
        // 4: NULL (usually locale indicator)
        var atomHeader = METADATA_HEADER + 4 + 4;
        var dataStart = offset + atomHeader;
        var dataLength = atomSize - atomHeader;
        var atomData;

        // Workaround for covers being parsed as 'uint8' type despite being an 'covr' atom
        if (atomName === 'covr' && type === 'uint8') {
          type = 'jpeg';
        }

        switch (type) {
          case "text":
            atomData = data.getStringWithCharsetAt(dataStart, dataLength, "utf-8").toString();
            break;

          case "uint8":
            atomData = data.getShortAt(dataStart, false);
            break;

          case "int":
          case "uint":
            // Though the QuickTime spec doesn't state it, there are 64-bit values
            // such as plID (Playlist/Collection ID). With its single 64-bit floating
            // point number type, these are hard to parse and pass in JavaScript.
            // The high word of plID seems to always be zero, so, as this is the
            // only current 64-bit atom handled, it is parsed from its 32-bit
            // low word as an unsigned long.
            //
            var intReader = type == 'int' ? dataLength == 1 ? data.getSByteAt : dataLength == 2 ? data.getSShortAt : dataLength == 4 ? data.getSLongAt : data.getLongAt : dataLength == 1 ? data.getByteAt : dataLength == 2 ? data.getShortAt : data.getLongAt;
            // $FlowFixMe - getByteAt doesn't receive a second argument
            atomData = intReader.call(data, dataStart + (dataLength == 8 ? 4 : 0), true);
            break;

          case "jpeg":
          case "png":
            atomData = {
              "format": "image/" + type,
              "data": data.getBytesAt(dataStart, dataLength)
            };
            break;
        }
      }

      return {
        id: atomName,
        size: atomSize,
        description: ATOM_DESCRIPTIONS[atomName] || "Unknown",
        data: atomData
      };
    }
  }, {
    key: 'getShortcuts',
    value: function getShortcuts() {
      return SHORTCUTS;
    }
  }], [{
    key: 'getTagIdentifierByteRange',
    value: function getTagIdentifierByteRange() {
      // The tag identifier is located in [4, 8] but since we'll need to reader
      // the header of the first block anyway, we load it instead to avoid
      // making two requests.
      return {
        offset: 0,
        length: 16
      };
    }
  }, {
    key: 'canReadTagFormat',
    value: function canReadTagFormat(tagIdentifier) {
      var id = String.fromCharCode.apply(String, tagIdentifier.slice(4, 8));
      return id === "ftyp";
    }
  }]);

  return MP4TagReader;
}(MediaTagReader);

/*
 * https://developer.apple.com/library/content/documentation/QuickTime/QTFF/Metadata/Metadata.html#//apple_ref/doc/uid/TP40000939-CH1-SW35
*/


var TYPES = {
  "0": "uint8",
  "1": "text",
  "13": "jpeg",
  "14": "png",
  "21": "int",
  "22": "uint"
};

var ATOM_DESCRIPTIONS = {
  "©alb": "Album",
  "©ART": "Artist",
  "aART": "Album Artist",
  "©day": "Release Date",
  "©nam": "Title",
  "©gen": "Genre",
  "gnre": "Genre",
  "trkn": "Track Number",
  "©wrt": "Composer",
  "©too": "Encoding Tool",
  "©enc": "Encoded By",
  "cprt": "Copyright",
  "covr": "Cover Art",
  "©grp": "Grouping",
  "keyw": "Keywords",
  "©lyr": "Lyrics",
  "©cmt": "Comment",
  "tmpo": "Tempo",
  "cpil": "Compilation",
  "disk": "Disc Number",
  "tvsh": "TV Show Name",
  "tven": "TV Episode ID",
  "tvsn": "TV Season",
  "tves": "TV Episode",
  "tvnn": "TV Network",
  "desc": "Description",
  "ldes": "Long Description",
  "sonm": "Sort Name",
  "soar": "Sort Artist",
  "soaa": "Sort Album",
  "soco": "Sort Composer",
  "sosn": "Sort Show",
  "purd": "Purchase Date",
  "pcst": "Podcast",
  "purl": "Podcast URL",
  "catg": "Category",
  "hdvd": "HD Video",
  "stik": "Media Type",
  "rtng": "Content Rating",
  "pgap": "Gapless Playback",
  "apID": "Purchase Account",
  "sfID": "Country Code",
  "atID": "Artist ID",
  "cnID": "Catalog ID",
  "plID": "Collection ID",
  "geID": "Genre ID",
  "xid ": "Vendor Information",
  "flvr": "Codec Flavor"
};

var UNSUPPORTED_ATOMS = {
  "----": 1
};

var SHORTCUTS = {
  "title": "©nam",
  "artist": "©ART",
  "album": "©alb",
  "year": "©day",
  "comment": "©cmt",
  "track": "trkn",
  "genre": "©gen",
  "picture": "covr",
  "lyrics": "©lyr"
};

module.exports = MP4TagReader;

},{"./MediaFileReader":11,"./MediaTagReader":12}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringUtils = require('./StringUtils');

var MediaFileReader = function () {
  function MediaFileReader(path) {
    _classCallCheck(this, MediaFileReader);

    this._isInitialized = false;
    this._size = 0;
  }

  /**
   * Decides if this media file reader is able to read the given file.
   */


  _createClass(MediaFileReader, [{
    key: 'init',


    /**
     * This function needs to be called before any other function.
     * Loads the necessary initial information from the file.
     */
    value: function init(callbacks) {
      var self = this;

      if (this._isInitialized) {
        setTimeout(callbacks.onSuccess, 1);
      } else {
        return this._init({
          onSuccess: function () {
            self._isInitialized = true;
            callbacks.onSuccess();
          },
          onError: callbacks.onError
        });
      }
    }
  }, {
    key: '_init',
    value: function _init(callbacks) {
      throw new Error("Must implement init function");
    }

    /**
     * @param range The start and end indexes of the range to load.
     *        Ex: [0, 7] load bytes 0 to 7 inclusive.
     */

  }, {
    key: 'loadRange',
    value: function loadRange(range, callbacks) {
      throw new Error("Must implement loadRange function");
    }

    /**
     * @return The size of the file in bytes.
     */

  }, {
    key: 'getSize',
    value: function getSize() {
      if (!this._isInitialized) {
        throw new Error("init() must be called first.");
      }

      return this._size;
    }
  }, {
    key: 'getByteAt',
    value: function getByteAt(offset) {
      throw new Error("Must implement getByteAt function");
    }
  }, {
    key: 'getBytesAt',
    value: function getBytesAt(offset, length) {
      var bytes = new Array(length);
      for (var i = 0; i < length; i++) {
        bytes[i] = this.getByteAt(offset + i);
      }
      return bytes;
    }
  }, {
    key: 'isBitSetAt',
    value: function isBitSetAt(offset, bit) {
      var iByte = this.getByteAt(offset);
      return (iByte & 1 << bit) != 0;
    }
  }, {
    key: 'getSByteAt',
    value: function getSByteAt(offset) {
      var iByte = this.getByteAt(offset);
      if (iByte > 127) {
        return iByte - 256;
      } else {
        return iByte;
      }
    }
  }, {
    key: 'getShortAt',
    value: function getShortAt(offset, isBigEndian) {
      var iShort = isBigEndian ? (this.getByteAt(offset) << 8) + this.getByteAt(offset + 1) : (this.getByteAt(offset + 1) << 8) + this.getByteAt(offset);
      if (iShort < 0) {
        iShort += 65536;
      }
      return iShort;
    }
  }, {
    key: 'getSShortAt',
    value: function getSShortAt(offset, isBigEndian) {
      var iUShort = this.getShortAt(offset, isBigEndian);
      if (iUShort > 32767) {
        return iUShort - 65536;
      } else {
        return iUShort;
      }
    }
  }, {
    key: 'getLongAt',
    value: function getLongAt(offset, isBigEndian) {
      var iByte1 = this.getByteAt(offset),
          iByte2 = this.getByteAt(offset + 1),
          iByte3 = this.getByteAt(offset + 2),
          iByte4 = this.getByteAt(offset + 3);

      var iLong = isBigEndian ? (((iByte1 << 8) + iByte2 << 8) + iByte3 << 8) + iByte4 : (((iByte4 << 8) + iByte3 << 8) + iByte2 << 8) + iByte1;

      if (iLong < 0) {
        iLong += 4294967296;
      }

      return iLong;
    }
  }, {
    key: 'getSLongAt',
    value: function getSLongAt(offset, isBigEndian) {
      var iULong = this.getLongAt(offset, isBigEndian);

      if (iULong > 2147483647) {
        return iULong - 4294967296;
      } else {
        return iULong;
      }
    }
  }, {
    key: 'getInteger24At',
    value: function getInteger24At(offset, isBigEndian) {
      var iByte1 = this.getByteAt(offset),
          iByte2 = this.getByteAt(offset + 1),
          iByte3 = this.getByteAt(offset + 2);

      var iInteger = isBigEndian ? ((iByte1 << 8) + iByte2 << 8) + iByte3 : ((iByte3 << 8) + iByte2 << 8) + iByte1;

      if (iInteger < 0) {
        iInteger += 16777216;
      }

      return iInteger;
    }
  }, {
    key: 'getStringAt',
    value: function getStringAt(offset, length) {
      var string = [];
      for (var i = offset, j = 0; i < offset + length; i++, j++) {
        string[j] = String.fromCharCode(this.getByteAt(i));
      }
      return string.join("");
    }
  }, {
    key: 'getStringWithCharsetAt',
    value: function getStringWithCharsetAt(offset, length, charset) {
      var bytes = this.getBytesAt(offset, length);
      var string;

      switch ((charset || '').toLowerCase()) {
        case "utf-16":
        case "utf-16le":
        case "utf-16be":
          string = StringUtils.readUTF16String(bytes, charset === "utf-16be");
          break;

        case "utf-8":
          string = StringUtils.readUTF8String(bytes);
          break;

        default:
          string = StringUtils.readNullTerminatedString(bytes);
          break;
      }

      return string;
    }
  }, {
    key: 'getCharAt',
    value: function getCharAt(offset) {
      return String.fromCharCode(this.getByteAt(offset));
    }

    /**
     * The ID3v2 tag/frame size is encoded with four bytes where the most
     * significant bit (bit 7) is set to zero in every byte, making a total of 28
     * bits. The zeroed bits are ignored, so a 257 bytes long tag is represented
     * as $00 00 02 01.
     */

  }, {
    key: 'getSynchsafeInteger32At',
    value: function getSynchsafeInteger32At(offset) {
      var size1 = this.getByteAt(offset);
      var size2 = this.getByteAt(offset + 1);
      var size3 = this.getByteAt(offset + 2);
      var size4 = this.getByteAt(offset + 3);
      // 0x7f = 0b01111111
      var size = size4 & 0x7f | (size3 & 0x7f) << 7 | (size2 & 0x7f) << 14 | (size1 & 0x7f) << 21;

      return size;
    }
  }], [{
    key: 'canReadFile',
    value: function canReadFile(file) {
      throw new Error("Must implement canReadFile function");
    }
  }]);

  return MediaFileReader;
}();

module.exports = MediaFileReader;

},{"./StringUtils":13}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaFileReader = require('./MediaFileReader');

var MediaTagReader = function () {
  function MediaTagReader(mediaFileReader) {
    _classCallCheck(this, MediaTagReader);

    this._mediaFileReader = mediaFileReader;
    this._tags = null;
  }

  /**
   * Returns the byte range that needs to be loaded and fed to
   * _canReadTagFormat in order to identify if the file contains tag
   * information that can be read.
   */


  _createClass(MediaTagReader, [{
    key: 'setTagsToRead',
    value: function setTagsToRead(tags) {
      this._tags = tags;
      return this;
    }
  }, {
    key: 'read',
    value: function read(callbacks) {
      var self = this;

      this._mediaFileReader.init({
        onSuccess: function () {
          self._loadData(self._mediaFileReader, {
            onSuccess: function () {
              try {
                var tags = self._parseData(self._mediaFileReader, self._tags);
              } catch (ex) {
                if (callbacks.onError) {
                  callbacks.onError({
                    "type": "parseData",
                    "info": ex.message
                  });
                  return;
                }
              }

              // TODO: destroy mediaFileReader
              callbacks.onSuccess(tags);
            },
            onError: callbacks.onError
          });
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: 'getShortcuts',
    value: function getShortcuts() {
      return {};
    }

    /**
     * Load the necessary bytes from the media file.
     */

  }, {
    key: '_loadData',
    value: function _loadData(mediaFileReader, callbacks) {
      throw new Error("Must implement _loadData function");
    }

    /**
     * Parse the loaded data to read the media tags.
     */

  }, {
    key: '_parseData',
    value: function _parseData(mediaFileReader, tags) {
      throw new Error("Must implement _parseData function");
    }
  }, {
    key: '_expandShortcutTags',
    value: function _expandShortcutTags(tagsWithShortcuts) {
      if (!tagsWithShortcuts) {
        return null;
      }

      var tags = [];
      var shortcuts = this.getShortcuts();
      for (var i = 0, tagOrShortcut; tagOrShortcut = tagsWithShortcuts[i]; i++) {
        tags = tags.concat(shortcuts[tagOrShortcut] || [tagOrShortcut]);
      }

      return tags;
    }
  }], [{
    key: 'getTagIdentifierByteRange',
    value: function getTagIdentifierByteRange() {
      throw new Error("Must implement");
    }

    /**
     * Given a tag identifier (read from the file byte positions speficied by
     * getTagIdentifierByteRange) this function checks if it can read the tag
     * format or not.
     */

  }, {
    key: 'canReadTagFormat',
    value: function canReadTagFormat(tagIdentifier) {
      throw new Error("Must implement");
    }
  }]);

  return MediaTagReader;
}();

module.exports = MediaTagReader;

},{"./MediaFileReader":11}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InternalDecodedString = function () {
  function InternalDecodedString(value, bytesReadCount) {
    _classCallCheck(this, InternalDecodedString);

    this._value = value;
    this.bytesReadCount = bytesReadCount;
    this.length = value.length;
  }

  _createClass(InternalDecodedString, [{
    key: "toString",
    value: function toString() {
      return this._value;
    }
  }]);

  return InternalDecodedString;
}();

var StringUtils = {
  readUTF16String: function (bytes, bigEndian, maxBytes) {
    var ix = 0;
    var offset1 = 1,
        offset2 = 0;

    maxBytes = Math.min(maxBytes || bytes.length, bytes.length);

    if (bytes[0] == 0xFE && bytes[1] == 0xFF) {
      bigEndian = true;
      ix = 2;
    } else if (bytes[0] == 0xFF && bytes[1] == 0xFE) {
      bigEndian = false;
      ix = 2;
    }
    if (bigEndian) {
      offset1 = 0;
      offset2 = 1;
    }

    var arr = [];
    for (var j = 0; ix < maxBytes; j++) {
      var byte1 = bytes[ix + offset1];
      var byte2 = bytes[ix + offset2];
      var word1 = (byte1 << 8) + byte2;
      ix += 2;
      if (word1 == 0x0000) {
        break;
      } else if (byte1 < 0xD8 || byte1 >= 0xE0) {
        arr[j] = String.fromCharCode(word1);
      } else {
        var byte3 = bytes[ix + offset1];
        var byte4 = bytes[ix + offset2];
        var word2 = (byte3 << 8) + byte4;
        ix += 2;
        arr[j] = String.fromCharCode(word1, word2);
      }
    }
    return new InternalDecodedString(arr.join(""), ix);
  },

  readUTF8String: function (bytes, maxBytes) {
    var ix = 0;
    maxBytes = Math.min(maxBytes || bytes.length, bytes.length);

    if (bytes[0] == 0xEF && bytes[1] == 0xBB && bytes[2] == 0xBF) {
      ix = 3;
    }

    var arr = [];
    for (var j = 0; ix < maxBytes; j++) {
      var byte1 = bytes[ix++];
      if (byte1 == 0x00) {
        break;
      } else if (byte1 < 0x80) {
        arr[j] = String.fromCharCode(byte1);
      } else if (byte1 >= 0xC2 && byte1 < 0xE0) {
        var byte2 = bytes[ix++];
        arr[j] = String.fromCharCode(((byte1 & 0x1F) << 6) + (byte2 & 0x3F));
      } else if (byte1 >= 0xE0 && byte1 < 0xF0) {
        var byte2 = bytes[ix++];
        var byte3 = bytes[ix++];
        arr[j] = String.fromCharCode(((byte1 & 0xFF) << 12) + ((byte2 & 0x3F) << 6) + (byte3 & 0x3F));
      } else if (byte1 >= 0xF0 && byte1 < 0xF5) {
        var byte2 = bytes[ix++];
        var byte3 = bytes[ix++];
        var byte4 = bytes[ix++];
        var codepoint = ((byte1 & 0x07) << 18) + ((byte2 & 0x3F) << 12) + ((byte3 & 0x3F) << 6) + (byte4 & 0x3F) - 0x10000;
        arr[j] = String.fromCharCode((codepoint >> 10) + 0xD800, (codepoint & 0x3FF) + 0xDC00);
      }
    }
    return new InternalDecodedString(arr.join(""), ix);
  },

  readNullTerminatedString: function (bytes, maxBytes) {
    var arr = [];
    maxBytes = maxBytes || bytes.length;
    for (var i = 0; i < maxBytes;) {
      var byte1 = bytes[i++];
      if (byte1 == 0x00) {
        break;
      }
      arr[i - 1] = String.fromCharCode(byte1);
    }
    return new InternalDecodedString(arr.join(""), i);
  }
};

module.exports = StringUtils;

},{}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChunkedFileData = require('./ChunkedFileData');
var MediaFileReader = require('./MediaFileReader');

var CHUNK_SIZE = 1024;

var XhrFileReader = function (_MediaFileReader) {
  _inherits(XhrFileReader, _MediaFileReader);

  function XhrFileReader(url) {
    _classCallCheck(this, XhrFileReader);

    var _this = _possibleConstructorReturn(this, (XhrFileReader.__proto__ || Object.getPrototypeOf(XhrFileReader)).call(this));

    _this._url = url;
    _this._fileData = new ChunkedFileData();
    return _this;
  }

  _createClass(XhrFileReader, [{
    key: '_init',
    value: function _init(callbacks) {
      if (XhrFileReader._config.avoidHeadRequests) {
        this._fetchSizeWithGetRequest(callbacks);
      } else {
        this._fetchSizeWithHeadRequest(callbacks);
      }
    }
  }, {
    key: '_fetchSizeWithHeadRequest',
    value: function _fetchSizeWithHeadRequest(callbacks) {
      var self = this;

      this._makeXHRRequest("HEAD", null, {
        onSuccess: function (xhr) {
          var contentLength = self._parseContentLength(xhr);
          if (contentLength) {
            self._size = contentLength;
            callbacks.onSuccess();
          } else {
            // Content-Length not provided by the server, fallback to
            // GET requests.
            self._fetchSizeWithGetRequest(callbacks);
          }
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: '_fetchSizeWithGetRequest',
    value: function _fetchSizeWithGetRequest(callbacks) {
      var self = this;
      var range = this._roundRangeToChunkMultiple([0, 0]);

      this._makeXHRRequest("GET", range, {
        onSuccess: function (xhr) {
          var contentRange = self._parseContentRange(xhr);
          var data = self._getXhrResponseContent(xhr);

          if (contentRange) {
            if (contentRange.instanceLength == null) {
              // Last resort, server is not able to tell us the content length,
              // need to fetch entire file then.
              self._fetchEntireFile(callbacks);
              return;
            }
            self._size = contentRange.instanceLength;
          } else {
            // Range request not supported, we got the entire file
            self._size = data.length;
          }

          self._fileData.addData(0, data);
          callbacks.onSuccess();
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: '_fetchEntireFile',
    value: function _fetchEntireFile(callbacks) {
      var self = this;
      this._makeXHRRequest("GET", null, {
        onSuccess: function (xhr) {
          var data = self._getXhrResponseContent(xhr);
          self._size = data.length;
          self._fileData.addData(0, data);
          callbacks.onSuccess();
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: '_getXhrResponseContent',
    value: function _getXhrResponseContent(xhr) {
      return xhr.responseBody || xhr.responseText || "";
    }
  }, {
    key: '_parseContentLength',
    value: function _parseContentLength(xhr) {
      var contentLength = this._getResponseHeader(xhr, "Content-Length");

      if (contentLength == null) {
        return contentLength;
      } else {
        return parseInt(contentLength, 10);
      }
    }
  }, {
    key: '_parseContentRange',
    value: function _parseContentRange(xhr) {
      var contentRange = this._getResponseHeader(xhr, "Content-Range");

      if (contentRange) {
        var parsedContentRange = contentRange.match(/bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i);
        if (!parsedContentRange) {
          throw new Error("FIXME: Unknown Content-Range syntax: " + contentRange);
        }

        return {
          firstBytePosition: parseInt(parsedContentRange[1], 10),
          lastBytePosition: parseInt(parsedContentRange[2], 10),
          instanceLength: parsedContentRange[3] ? parseInt(parsedContentRange[3], 10) : null
        };
      } else {
        return null;
      }
    }
  }, {
    key: 'loadRange',
    value: function loadRange(range, callbacks) {
      var self = this;

      if (self._fileData.hasDataRange(range[0], Math.min(self._size, range[1]))) {
        setTimeout(callbacks.onSuccess, 1);
        return;
      }

      // Always download in multiples of CHUNK_SIZE. If we're going to make a
      // request might as well get a chunk that makes sense. The big cost is
      // establishing the connection so getting 10bytes or 1K doesn't really
      // make a difference.
      range = this._roundRangeToChunkMultiple(range);

      // Upper range should not be greater than max file size
      range[1] = Math.min(self._size, range[1]);

      this._makeXHRRequest("GET", range, {
        onSuccess: function (xhr) {
          var data = self._getXhrResponseContent(xhr);
          self._fileData.addData(range[0], data);
          callbacks.onSuccess();
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: '_roundRangeToChunkMultiple',
    value: function _roundRangeToChunkMultiple(range) {
      var length = range[1] - range[0] + 1;
      var newLength = Math.ceil(length / CHUNK_SIZE) * CHUNK_SIZE;
      return [range[0], range[0] + newLength - 1];
    }
  }, {
    key: '_makeXHRRequest',
    value: function _makeXHRRequest(method, range, callbacks) {
      var xhr = this._createXHRObject();
      xhr.open(method, this._url);

      var onXHRLoad = function () {
        // 200 - OK
        // 206 - Partial Content
        // $FlowIssue - xhr will not be null here
        if (xhr.status === 200 || xhr.status === 206) {
          callbacks.onSuccess(xhr);
        } else if (callbacks.onError) {
          callbacks.onError({
            "type": "xhr",
            "info": "Unexpected HTTP status " + xhr.status + ".",
            "xhr": xhr
          });
        }
        xhr = null;
      };

      if (typeof xhr.onload !== 'undefined') {
        xhr.onload = onXHRLoad;
        xhr.onerror = function () {
          if (callbacks.onError) {
            callbacks.onError({
              "type": "xhr",
              "info": "Generic XHR error, check xhr object.",
              "xhr": xhr
            });
          }
        };
      } else {
        xhr.onreadystatechange = function () {
          // $FlowIssue - xhr will not be null here
          if (xhr.readyState === 4) {
            onXHRLoad();
          }
        };
      }

      if (XhrFileReader._config.timeoutInSec) {
        xhr.timeout = XhrFileReader._config.timeoutInSec * 1000;
        xhr.ontimeout = function () {
          if (callbacks.onError) {
            callbacks.onError({
              "type": "xhr",
              // $FlowIssue - xhr.timeout will not be null
              "info": "Timeout after " + xhr.timeout / 1000 + "s. Use jsmediatags.Config.setXhrTimeout to override.",
              "xhr": xhr
            });
          }
        };
      }

      xhr.overrideMimeType("text/plain; charset=x-user-defined");
      if (range) {
        this._setRequestHeader(xhr, "Range", "bytes=" + range[0] + "-" + range[1]);
      }
      this._setRequestHeader(xhr, "If-Modified-Since", "Sat, 01 Jan 1970 00:00:00 GMT");
      xhr.send(null);
    }
  }, {
    key: '_setRequestHeader',
    value: function _setRequestHeader(xhr, headerName, headerValue) {
      if (XhrFileReader._config.disallowedXhrHeaders.indexOf(headerName.toLowerCase()) < 0) {
        xhr.setRequestHeader(headerName, headerValue);
      }
    }
  }, {
    key: '_hasResponseHeader',
    value: function _hasResponseHeader(xhr, headerName) {
      var allResponseHeaders = xhr.getAllResponseHeaders();

      if (!allResponseHeaders) {
        return false;
      }

      var headers = allResponseHeaders.split("\r\n");
      var headerNames = [];
      for (var i = 0; i < headers.length; i++) {
        headerNames[i] = headers[i].split(":")[0].toLowerCase();
      }

      return headerNames.indexOf(headerName.toLowerCase()) >= 0;
    }
  }, {
    key: '_getResponseHeader',
    value: function _getResponseHeader(xhr, headerName) {
      if (!this._hasResponseHeader(xhr, headerName)) {
        return null;
      }

      return xhr.getResponseHeader(headerName);
    }
  }, {
    key: 'getByteAt',
    value: function getByteAt(offset) {
      var character = this._fileData.getByteAt(offset);
      return character.charCodeAt(0) & 0xff;
    }
  }, {
    key: '_isWebWorker',
    value: function _isWebWorker() {
      return typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    }
  }, {
    key: '_createXHRObject',
    value: function _createXHRObject() {
      if (typeof window === "undefined" && !this._isWebWorker()) {
        // $FlowIssue - flow is not able to recognize this module.
        return new (require("xhr2").XMLHttpRequest)();
      }

      if (typeof XMLHttpRequest !== "undefined") {
        return new XMLHttpRequest();
      }

      throw new Error("XMLHttpRequest is not supported");
    }
  }], [{
    key: 'canReadFile',
    value: function canReadFile(file) {
      return typeof file === 'string' && /^[a-z]+:\/\//i.test(file);
    }
  }, {
    key: 'setConfig',
    value: function setConfig(config) {
      for (var key in config) {
        if (config.hasOwnProperty(key)) {
          this._config[key] = config[key];
        }
      }var disallowedXhrHeaders = this._config.disallowedXhrHeaders;
      for (var i = 0; i < disallowedXhrHeaders.length; i++) {
        disallowedXhrHeaders[i] = disallowedXhrHeaders[i].toLowerCase();
      }
    }
  }]);

  return XhrFileReader;
}(MediaFileReader);

XhrFileReader._config = {
  avoidHeadRequests: false,
  disallowedXhrHeaders: [],
  timeoutInSec: 30
};

module.exports = XhrFileReader;

},{"./ChunkedFileData":5,"./MediaFileReader":11,"xhr2":2}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaFileReader = require("./MediaFileReader");
var NodeFileReader = require("./NodeFileReader");
var XhrFileReader = require("./XhrFileReader");
var BlobFileReader = require("./BlobFileReader");
var ArrayFileReader = require("./ArrayFileReader");
var MediaTagReader = require("./MediaTagReader");
var ID3v1TagReader = require("./ID3v1TagReader");
var ID3v2TagReader = require("./ID3v2TagReader");
var MP4TagReader = require("./MP4TagReader");
var FLACTagReader = require("./FLACTagReader");

var mediaFileReaders = [];
var mediaTagReaders = [];

function read(location, callbacks) {
  new Reader(location).read(callbacks);
}

function isRangeValid(range, fileSize) {
  var invalidPositiveRange = range.offset >= 0 && range.offset + range.length >= fileSize;

  var invalidNegativeRange = range.offset < 0 && (-range.offset > fileSize || range.offset + range.length > 0);

  return !(invalidPositiveRange || invalidNegativeRange);
}

var Reader = function () {
  function Reader(file) {
    _classCallCheck(this, Reader);

    this._file = file;
  }

  _createClass(Reader, [{
    key: "setTagsToRead",
    value: function setTagsToRead(tagsToRead) {
      this._tagsToRead = tagsToRead;
      return this;
    }
  }, {
    key: "setFileReader",
    value: function setFileReader(fileReader) {
      this._fileReader = fileReader;
      return this;
    }
  }, {
    key: "setTagReader",
    value: function setTagReader(tagReader) {
      this._tagReader = tagReader;
      return this;
    }
  }, {
    key: "read",
    value: function read(callbacks) {
      var FileReader = this._getFileReader();
      var fileReader = new FileReader(this._file);
      var self = this;

      fileReader.init({
        onSuccess: function () {
          self._getTagReader(fileReader, {
            onSuccess: function (TagReader) {
              new TagReader(fileReader).setTagsToRead(self._tagsToRead).read(callbacks);
            },
            onError: callbacks.onError
          });
        },
        onError: callbacks.onError
      });
    }
  }, {
    key: "_getFileReader",
    value: function _getFileReader() {
      if (this._fileReader) {
        return this._fileReader;
      } else {
        return this._findFileReader();
      }
    }
  }, {
    key: "_findFileReader",
    value: function _findFileReader() {
      for (var i = 0; i < mediaFileReaders.length; i++) {
        if (mediaFileReaders[i].canReadFile(this._file)) {
          return mediaFileReaders[i];
        }
      }

      throw new Error("No suitable file reader found for " + this._file);
    }
  }, {
    key: "_getTagReader",
    value: function _getTagReader(fileReader, callbacks) {
      if (this._tagReader) {
        var tagReader = this._tagReader;
        setTimeout(function () {
          callbacks.onSuccess(tagReader);
        }, 1);
      } else {
        this._findTagReader(fileReader, callbacks);
      }
    }
  }, {
    key: "_findTagReader",
    value: function _findTagReader(fileReader, callbacks) {
      // We don't want to make multiple fetches per tag reader to get the tag
      // identifier. The strategy here is to combine all the tag identifier
      // ranges into one and make a single fetch. This is particularly important
      // in file readers that have expensive loads like the XHR one.
      // However, with this strategy we run into the problem of loading the
      // entire file because tag identifiers might be at the start or end of
      // the file.
      // To get around this we divide the tag readers into two categories, the
      // ones that read their tag identifiers from the start of the file and the
      // ones that read from the end of the file.
      var tagReadersAtFileStart = [];
      var tagReadersAtFileEnd = [];
      var fileSize = fileReader.getSize();

      for (var i = 0; i < mediaTagReaders.length; i++) {
        var range = mediaTagReaders[i].getTagIdentifierByteRange();
        if (!isRangeValid(range, fileSize)) {
          continue;
        }

        if (range.offset >= 0 && range.offset < fileSize / 2 || range.offset < 0 && range.offset < -fileSize / 2) {
          tagReadersAtFileStart.push(mediaTagReaders[i]);
        } else {
          tagReadersAtFileEnd.push(mediaTagReaders[i]);
        }
      }

      var tagsLoaded = false;
      var loadTagIdentifiersCallbacks = {
        onSuccess: function () {
          if (!tagsLoaded) {
            // We're expecting to load two sets of tag identifiers. This flag
            // indicates when the first one has been loaded.
            tagsLoaded = true;
            return;
          }

          for (var i = 0; i < mediaTagReaders.length; i++) {
            var range = mediaTagReaders[i].getTagIdentifierByteRange();
            if (!isRangeValid(range, fileSize)) {
              continue;
            }

            try {
              var tagIndentifier = fileReader.getBytesAt(range.offset >= 0 ? range.offset : range.offset + fileSize, range.length);
            } catch (ex) {
              if (callbacks.onError) {
                callbacks.onError({
                  "type": "fileReader",
                  "info": ex.message
                });
              }
              return;
            }

            if (mediaTagReaders[i].canReadTagFormat(tagIndentifier)) {
              callbacks.onSuccess(mediaTagReaders[i]);
              return;
            }
          }

          if (callbacks.onError) {
            callbacks.onError({
              "type": "tagFormat",
              "info": "No suitable tag reader found"
            });
          }
        },
        onError: callbacks.onError
      };

      this._loadTagIdentifierRanges(fileReader, tagReadersAtFileStart, loadTagIdentifiersCallbacks);
      this._loadTagIdentifierRanges(fileReader, tagReadersAtFileEnd, loadTagIdentifiersCallbacks);
    }
  }, {
    key: "_loadTagIdentifierRanges",
    value: function _loadTagIdentifierRanges(fileReader, tagReaders, callbacks) {
      if (tagReaders.length === 0) {
        // Force async
        setTimeout(callbacks.onSuccess, 1);
        return;
      }

      var tagIdentifierRange = [Number.MAX_VALUE, 0];
      var fileSize = fileReader.getSize();

      // Create a super set of all ranges so we can load them all at once.
      // Might need to rethink this approach if there are tag ranges too far
      // a part from each other. We're good for now though.
      for (var i = 0; i < tagReaders.length; i++) {
        var range = tagReaders[i].getTagIdentifierByteRange();
        var start = range.offset >= 0 ? range.offset : range.offset + fileSize;
        var end = start + range.length - 1;

        tagIdentifierRange[0] = Math.min(start, tagIdentifierRange[0]);
        tagIdentifierRange[1] = Math.max(end, tagIdentifierRange[1]);
      }

      fileReader.loadRange(tagIdentifierRange, callbacks);
    }
  }]);

  return Reader;
}();

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "addFileReader",
    value: function addFileReader(fileReader) {
      mediaFileReaders.push(fileReader);
      return Config;
    }
  }, {
    key: "addTagReader",
    value: function addTagReader(tagReader) {
      mediaTagReaders.push(tagReader);
      return Config;
    }
  }, {
    key: "removeTagReader",
    value: function removeTagReader(tagReader) {
      var tagReaderIx = mediaTagReaders.indexOf(tagReader);

      if (tagReaderIx >= 0) {
        mediaTagReaders.splice(tagReaderIx, 1);
      }

      return Config;
    }
  }, {
    key: "EXPERIMENTAL_avoidHeadRequests",
    value: function EXPERIMENTAL_avoidHeadRequests() {
      XhrFileReader.setConfig({
        avoidHeadRequests: true
      });
    }
  }, {
    key: "setDisallowedXhrHeaders",
    value: function setDisallowedXhrHeaders(disallowedXhrHeaders) {
      XhrFileReader.setConfig({
        disallowedXhrHeaders: disallowedXhrHeaders
      });
    }
  }, {
    key: "setXhrTimeoutInSec",
    value: function setXhrTimeoutInSec(timeoutInSec) {
      XhrFileReader.setConfig({
        timeoutInSec: timeoutInSec
      });
    }
  }]);

  return Config;
}();

Config.addFileReader(XhrFileReader).addFileReader(BlobFileReader).addFileReader(ArrayFileReader).addTagReader(ID3v2TagReader).addTagReader(ID3v1TagReader).addTagReader(MP4TagReader).addTagReader(FLACTagReader);

if (typeof process !== "undefined" && !process.browser) {
  Config.addFileReader(NodeFileReader);
}

module.exports = {
  "read": read,
  "Reader": Reader,
  "Config": Config
};

},{"./ArrayFileReader":3,"./BlobFileReader":4,"./FLACTagReader":6,"./ID3v1TagReader":7,"./ID3v2TagReader":9,"./MP4TagReader":10,"./MediaFileReader":11,"./MediaTagReader":12,"./NodeFileReader":1,"./XhrFileReader":14}]},{},[15])(15)
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(198).Buffer, __webpack_require__(202)))

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(199)
var ieee754 = __webpack_require__(200)
var isArray = __webpack_require__(201)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 200 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 201 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 202 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(204);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(37);
var $keys = __webpack_require__(28);

__webpack_require__(205)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(8);
var fails = __webpack_require__(25);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _constants = __webpack_require__(5);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultWindowsState = {
  focused: _constants.WINDOWS.MAIN,
  genWindows: {
    // TODO: Remove static capabilites and derive them from ids/generic
    main: {
      title: "Main Window",
      size: [0, 0],
      open: true,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+W"
    },
    equalizer: {
      title: "Equalizer",
      size: [0, 0],
      open: true,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      generic: false,
      hotkey: "Alt+G"
    },
    playlist: {
      title: "Playlist Editor",
      size: [0, 0],
      open: true,
      shade: false,
      canResize: true,
      canShade: true,
      canDouble: false,
      generic: false,
      hotkey: "Alt+E"
    }
  },
  positions: {}
};

const windows = (state = defaultWindowsState, action) => {
  switch (action.type) {
    case _actionTypes.SET_FOCUSED_WINDOW:
      return (0, _extends3.default)({}, state, { focused: action.window });
    case _actionTypes.TOGGLE_WINDOW_SHADE_MODE:
      const canShade = state.genWindows[action.windowId].canShade;

      if (!canShade) {
        throw new Error("Tried to shade/unshade a window that cannot be shaded:", action.windowId);
      }
      return (0, _extends3.default)({}, state, {
        genWindows: (0, _extends3.default)({}, state.genWindows, {
          [action.windowId]: (0, _extends3.default)({}, state.genWindows[action.windowId], {
            shade: !state.genWindows[action.windowId].shade
          })
        })
      });
    case _actionTypes.TOGGLE_WINDOW:
      return (0, _extends3.default)({}, state, {
        genWindows: (0, _extends3.default)({}, state.genWindows, {
          [action.windowId]: (0, _extends3.default)({}, state.genWindows[action.windowId], {
            open: !state.genWindows[action.windowId].open
          })
        })
      });
    case _actionTypes.CLOSE_WINDOW:
      return (0, _extends3.default)({}, state, {
        genWindows: (0, _extends3.default)({}, state.genWindows, {
          [action.windowId]: (0, _extends3.default)({}, state.genWindows[action.windowId], {
            open: false
          })
        })
      });
    case _actionTypes.ADD_GEN_WINDOW:
      return (0, _extends3.default)({}, state, {
        genWindows: (0, _extends3.default)({}, state.genWindows, {
          [action.windowId]: {
            title: action.title,
            open: true,
            size: [0, 0],
            canShade: false,
            canResize: true,
            canDouble: false,
            generic: true
          }
        })
      });
    case _actionTypes.WINDOW_SIZE_CHANGED:
      const canResize = state.genWindows[action.windowId].canResize;

      if (!canResize) {
        throw new Error("Tried to resize a window that cannot be resized:", action.windowId);
      }
      return (0, _extends3.default)({}, state, {
        genWindows: (0, _extends3.default)({}, state.genWindows, {
          [action.windowId]: (0, _extends3.default)({}, state.genWindows[action.windowId], {
            size: action.size
          })
        })
      });
    case _actionTypes.UPDATE_WINDOW_POSITIONS:
      return (0, _extends3.default)({}, state, {
        positions: (0, _extends3.default)({}, state.positions, action.positions)
      });
    default:
      return state;
  }
};

exports.default = windows;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const media = (state, action) => {
  if (!state) {
    return {
      timeMode: "ELAPSED",
      timeElapsed: 0,
      length: null, // Consider renaming to "duration"
      kbps: null,
      khz: null,
      // The winamp ini file declares the default volume as "200".
      // The UI seems to show a default volume near 78, which would
      // math with the default value being 200 out of 255.
      volume: Math.round(200 / 255 * 100),
      balance: 0,
      channels: null,
      shuffle: false,
      repeat: false,
      // TODO: Enforce possible values
      status: "STOPPED"
    };
  }
  switch (action.type) {
    // TODO: Make these constants
    case _actionTypes.PLAY:
    case _actionTypes.IS_PLAYING:
      return (0, _extends3.default)({}, state, { status: "PLAYING" });
    case _actionTypes.PAUSE:
      return (0, _extends3.default)({}, state, { status: "PAUSED" });
    case _actionTypes.STOP:
    case _actionTypes.IS_STOPPED:
      return (0, _extends3.default)({}, state, { status: "STOPPED" });
    case _actionTypes.CHANNEL_COUNT_CHANGED:
      return (0, _extends3.default)({}, state, { channels: action.channels });
    case _actionTypes.TOGGLE_TIME_MODE:
      const newMode = state.timeMode === "REMAINING" ? "ELAPSED" : "REMAINING";
      return (0, _extends3.default)({}, state, { timeMode: newMode });
    case _actionTypes.UPDATE_TIME_ELAPSED:
      return (0, _extends3.default)({}, state, { timeElapsed: action.elapsed });
    case _actionTypes.ADD_TRACK_FROM_URL:
      return (0, _extends3.default)({}, state, {
        timeElapsed: 0,
        length: null,
        kbps: null,
        khz: null,
        channels: null
      });
    case _actionTypes.SET_MEDIA:
      return (0, _extends3.default)({}, state, {
        length: action.length,
        kbps: action.kbps,
        khz: action.khz,
        channels: action.channels
      });
    case _actionTypes.SET_VOLUME:
      return (0, _extends3.default)({}, state, { volume: action.volume });
    case _actionTypes.SET_BALANCE:
      return (0, _extends3.default)({}, state, { balance: action.balance });
    case _actionTypes.TOGGLE_REPEAT:
      return (0, _extends3.default)({}, state, { repeat: !state.repeat });
    case _actionTypes.TOGGLE_SHUFFLE:
      return (0, _extends3.default)({}, state, { shuffle: !state.shuffle });
    default:
      return state;
  }
};

exports.default = media;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultDisplayState = {
  doubled: false,
  marqueeStep: 0,
  loading: true,
  llama: false,
  closed: false,
  working: false,
  skinImages: {},
  skinColors: ["rgb(0,0,0)", "rgb(24,33,41)", "rgb(239,49,16)", "rgb(206,41,16)", "rgb(214,90,0)", "rgb(214,102,0)", "rgb(214,115,0)", "rgb(198,123,8)", "rgb(222,165,24)", "rgb(214,181,33)", "rgb(189,222,41)", "rgb(148,222,33)", "rgb(41,206,16)", "rgb(50,190,16)", "rgb(57,181,16)", "rgb(49,156,8)", "rgb(41,148,0)", "rgb(24,132,8)", "rgb(255,255,255)", "rgb(214,214,222)", "rgb(181,189,189)", "rgb(160,170,175)", "rgb(148,156,165)", "rgb(150,150,150)"],
  skinCursors: null,
  skinPlaylistStyle: null,
  skinRegion: {},
  visualizerStyle: 2,
  playlistScrollPosition: 0
};

const display = (state = defaultDisplayState, action) => {
  switch (action.type) {
    case _actionTypes.TOGGLE_DOUBLESIZE_MODE:
      return (0, _extends3.default)({}, state, { doubled: !state.doubled });
    case _actionTypes.TOGGLE_LLAMA_MODE:
      return (0, _extends3.default)({}, state, { llama: !state.llama });
    case _actionTypes.STEP_MARQUEE:
      // TODO: Prevent this from becoming huge
      return (0, _extends3.default)({}, state, { marqueeStep: state.marqueeStep + 1 });
    case _actionTypes.STOP_WORKING:
      return (0, _extends3.default)({}, state, { working: false });
    case _actionTypes.START_WORKING:
      return (0, _extends3.default)({}, state, { working: true });
    case _actionTypes.CLOSE_WINAMP:
      return (0, _extends3.default)({}, state, { closed: true });
    case _actionTypes.LOADED:
      return (0, _extends3.default)({}, state, { loading: false });
    case _actionTypes.SET_SKIN_DATA:
      return (0, _extends3.default)({}, state, {
        loading: false,
        skinImages: action.skinImages,
        skinColors: action.skinColors,
        skinPlaylistStyle: action.skinPlaylistStyle,
        skinCursors: action.skinCursors,
        skinRegion: action.skinRegion,
        skinGenLetterWidths: action.skinGenLetterWidths
      });
    case _actionTypes.TOGGLE_VISUALIZER_STYLE:
      return (0, _extends3.default)({}, state, { visualizerStyle: (state.visualizerStyle + 1) % 3 });
    case _actionTypes.SET_PLAYLIST_SCROLL_POSITION:
      return (0, _extends3.default)({}, state, { playlistScrollPosition: action.position });
    default:
      return state;
  }
};

exports.default = display;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userInput = undefined;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultUserInput = {
  focus: null,
  bandFocused: null,
  scrubPosition: 0,
  userMessage: null
};

const userInput = exports.userInput = (state = defaultUserInput, action) => {
  switch (action.type) {
    case _actionTypes.SET_FOCUS:
      return (0, _extends3.default)({}, state, { focus: action.input, bandFocused: null });
    case _actionTypes.SET_BAND_FOCUS:
      return (0, _extends3.default)({}, state, { focus: action.input, bandFocused: action.bandFocused });
    case _actionTypes.UNSET_FOCUS:
      return (0, _extends3.default)({}, state, { focus: null, bandFocused: null });
    case _actionTypes.SET_SCRUB_POSITION:
      return (0, _extends3.default)({}, state, { scrubPosition: action.position });
    case _actionTypes.SET_USER_MESSAGE:
      return (0, _extends3.default)({}, state, { userMessage: action.message });
    case _actionTypes.UNSET_USER_MESSAGE:
      return (0, _extends3.default)({}, state, { userMessage: null });
    default:
      return state;
  }
};

exports.default = userInput;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _constants = __webpack_require__(5);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const equalizer = (state, action) => {
  if (!state) {
    state = {
      on: true,
      auto: false,
      sliders: {
        preamp: 50
      }
    };
    _constants.BANDS.forEach(band => {
      state.sliders[band] = 50;
    });
    return state;
  }
  switch (action.type) {
    case _actionTypes.SET_BAND_VALUE:
      const newSliders = (0, _extends3.default)({}, state.sliders, { [action.band]: action.value });
      return (0, _extends3.default)({}, state, { sliders: newSliders });
    case _actionTypes.SET_EQ_ON:
      return (0, _extends3.default)({}, state, { on: true });
    case _actionTypes.SET_EQ_OFF:
      return (0, _extends3.default)({}, state, { on: false });
    case _actionTypes.SET_EQ_AUTO:
      return (0, _extends3.default)({}, state, { auto: action.value });
    default:
      return state;
  }
};

exports.default = equalizer;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const network = (state = { connected: true }, action) => {
  switch (action.type) {
    case _actionTypes.NETWORK_CONNECTED:
      return (0, _extends3.default)({}, state, { connected: true });
    case _actionTypes.NETWORK_DISCONNECTED:
      return (0, _extends3.default)({}, state, { connected: false });
    default:
      return state;
  }
};

exports.default = network;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultSettingsState = {
  availableSkins: []
};

const settings = (state = defaultSettingsState, action) => {
  switch (action.type) {
    case _actionTypes.SET_AVAILABLE_SKINS:
      return (0, _extends3.default)({}, state, { availableSkins: action.skins });
    default:
      return state;
  }
};

exports.default = settings;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

exports.default = media => store => {
  var _store$getState = store.getState(),
      _store$getState$media = _store$getState.media;

  const volume = _store$getState$media.volume,
        balance = _store$getState$media.balance;

  // Ensure the default state is the canonical value.

  media.setVolume(volume);
  media.setBalance(balance);
  // TODO: Ensure other values like bands and preamp are in sync

  media.on("timeupdate", () => {
    store.dispatch({
      type: _actionTypes.UPDATE_TIME_ELAPSED,
      elapsed: media.timeElapsed()
    });
  });

  media.on("ended", () => {
    store.dispatch({ type: _actionTypes.IS_STOPPED });
    store.dispatch((0, _actionCreators.next)());
  });

  media.on("playing", () => {
    store.dispatch({ type: _actionTypes.IS_PLAYING });
  });

  media.on("waiting", () => {
    store.dispatch({ type: _actionTypes.START_WORKING });
  });

  media.on("stopWaiting", () => {
    store.dispatch({ type: _actionTypes.STOP_WORKING });
  });

  media.on("fileLoaded", () => {
    store.dispatch({
      type: _actionTypes.SET_MEDIA,
      kbps: "128",
      khz: Math.round(media.sampleRate() / 1000).toString(),
      channels: media.channels(),
      length: media.duration(),
      id: (0, _selectors.getCurrentTrackId)(store.getState())
    });
  });

  media.on("channelupdate", () => {
    store.dispatch({
      type: _actionTypes.CHANNEL_COUNT_CHANGED,
      channels: media.channels()
    });
  });

  return next => action => {
    // TODO: Consider doing this after the action, and using the state as the source of truth.
    switch (action.type) {
      case _actionTypes.PLAY:
        media.play();
        break;
      case _actionTypes.PAUSE:
        media.pause();
        break;
      case _actionTypes.STOP:
        media.stop();
        break;
      case _actionTypes.SET_VOLUME:
        media.setVolume(action.volume);
        break;
      case _actionTypes.SET_BALANCE:
        media.setBalance(action.balance);
        break;
      case _actionTypes.SEEK_TO_PERCENT_COMPLETE:
        media.seekToPercentComplete(action.percent);
        break;
      case _actionTypes.PLAY_TRACK:
        {
          const track = store.getState().playlist.tracks[action.id];
          if (track != null) {
            media.loadFromUrl(track.url, true);
          }
          break;
        }
      case _actionTypes.BUFFER_TRACK:
        {
          const track = store.getState().playlist.tracks[action.id];
          if (track != null) {
            media.loadFromUrl(track.url, false);
          }
          break;
        }
      case _actionTypes.SET_BAND_VALUE:
        if (action.band === "preamp") {
          media.setPreamp(action.value);
        } else {
          media.setEqBand(action.band, action.value);
        }
        break;
      case _actionTypes.SET_EQ_OFF:
        media.disableEq();
        break;
      case _actionTypes.SET_EQ_ON:
        media.enableEq();
        break;
    }
    return next(action);
  };
};

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(215);
module.exports = __webpack_require__(8).Array.from;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(18);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(37);
var call = __webpack_require__(88);
var isArrayIter = __webpack_require__(89);
var toLength = __webpack_require__(43);
var createProperty = __webpack_require__(216);
var getIterFn = __webpack_require__(64);

$export($export.S + $export.F * !__webpack_require__(95)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(34);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(218);
var creator = __webpack_require__(219);

module.exports = {
  parser: parser,
  creator: creator
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(108);

function parser(arrayBuffer) {
  var data = {};
  var i = 0;
  var arr = new Int8Array(arrayBuffer);
  // Parse header
  data.type = String.fromCharCode.apply(
    null,
    arr.slice(i, CONSTANTS.HEADER.length)
  );
  if (data.type !== CONSTANTS.HEADER) {
    throw new Error("Invalid .eqf file.");
  }
  i += CONSTANTS.HEADER.length;
  // Skip "<ctrl-z>!--"
  i += 4;
  // Get the presets
  data.presets = [];
  while (i < arr.length) {
    var preset = {};
    // Get the name
    var nameStart = i;
    var nameEnd = nameStart + 257; // Str is fixed length
    // Str is null terminated
    while (arr[i] !== 0 && i <= nameEnd) {
      i++;
    }
    preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
    i = nameEnd; // Skip over any unused bytes

    // Get the levels
    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
    });
    data.presets.push(preset);
  }
  return data;
}

module.exports = parser;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(108);

var FILL_SIZE = 4;
var PRESET_LENGTH = 257;

function creator(data) {
  var buffer = [];
  for (var i = 0; i < CONSTANTS.HEADER.length; i++) {
    buffer.push(CONSTANTS.HEADER.charCodeAt(i));
  }
  buffer.push(26); // <ctrl-z>
  var ending = "!--";
  for (var i = 0; i < ending.length; i++) {
    buffer.push(ending.charCodeAt(i));
  }
  if (!data.presets) {
    throw new Error("Eqf data is missing presets");
  }
  data.presets.forEach(function(preset) {
    var k = 0;
    for (; k < preset.name.length; k++) {
      buffer.push(preset.name.charCodeAt(k));
    }
    for (; k < PRESET_LENGTH; k++) {
      buffer.push(0);
    }

    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      buffer.push(64 - preset[valueName]); // Adjust for inverse values
    });
  });
  return new Uint8Array(buffer).buffer;
}

module.exports = creator;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(32);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(50);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(60);

var _promise2 = _interopRequireDefault(_promise);

var _skinSprites = __webpack_require__(109);

var _skinSprites2 = _interopRequireDefault(_skinSprites);

var _regionParser = __webpack_require__(227);

var _regionParser2 = _interopRequireDefault(_regionParser);

var _constants = __webpack_require__(5);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getJSZip = () => {
  return new _promise2.default(resolve => {
    __webpack_require__.e/* require.ensure */(0).then((require => {
      resolve(__webpack_require__(127));
    }).bind(null, __webpack_require__)).catch(e => {
      console.error("Error loading JSZip", e);
    });
  });
};

const shallowMerge = objs => objs.reduce((prev, img) => (0, _assign2.default)(prev, img), {});

const CURSORS = ["CLOSE", "EQCLOSE", "EQNORMAL", "EQSLID", "EQTITLE", "MAINMENU", "MMENU", "MIN", "NORMAL", "PCLOSE", "PNORMAL", "POSBAR", "PSIZE", "PTBAR", "PVSCROLL", "PWINBUT", "PWSNORM", "PWSSIZE", "SONGNAME", "TITLEBAR", "VOLBAL", "WINBUT", "WSNORMAL", "WSPOSBAR"
/*
 * > There are usually 4 more cursors in the skins: volbar.cur, wsclose.cur,
 * > wswinbut.cur, wsmin.cur, but they are never used, at least in the last
 * > versions of winamp, so there's no need of including them. The cursors
 * > shown when the mouse is over the app-buttons are the same in normal and
 * > winshade mode, except for the main menu button. You can make animated
 * > cursors, but you have to name them with the extension .cur (animated
 * > cursors are usually .ani files).
 *
 * -- Skinners Atlas
 *
 * "VOLBAR",
 * "WSCLOSE",
 * "WSWINBUT",
 * "WSMIN",
 *
 */
];

const _genImgFromBlob = async blob => new _promise2.default((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    // Schedule cleanup of object url?
    // Maybe on next tick, or with requestidlecallback
    resolve(img);
  };
  img.onerror = () => reject("Failed to decode image");
  img.src = URL.createObjectURL(blob);
});

const genImgFromBlob = async blob => {
  if (window.createImageBitmap) {
    try {
      // Use this faster native browser API if available.
      return await window.createImageBitmap(blob);
    } catch (e) {
      console.warn("Encountered an error with createImageBitmap. Falling back to Image approach.");
      // There are some bugs in the new API. In case something goes wrong, we call fall back.
      return _genImgFromBlob(blob);
    }
  }
  return _genImgFromBlob(blob);
};

async function genFileFromZip(zip, fileName, ext, mode) {
  const regex = new RegExp(`^(.*/)?${fileName}(\.${ext})?$`, "i");
  const files = zip.file(regex);
  if (!files.length) {
    return null;
  }
  // Return a promise (awaitable).
  return {
    contents: await files[0].async(mode),
    name: files[0].name
  };
}

function getSpriteUrisFromImg(img, sprites) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  return sprites.reduce((images, sprite) => {
    canvas.height = sprite.height;
    canvas.width = sprite.width;

    context.drawImage(img, -sprite.x, -sprite.y);
    const image = canvas.toDataURL();
    images[sprite.name] = image;
    return images;
  }, {});
}

async function genImgFromFilename(zip, fileName) {
  // Winamp only supports .bmp images, but WACUP set a precidence of supporting
  // .png as well to reduce size. Since we care about size as well, we follow
  // suit. Our default skin uses .png to save 14kb.
  const file = await genFileFromZip(zip, fileName, "(png|bmp)", "blob");
  if (!file) {
    return null;
  }

  const mimeType = `image/${(0, _utils.getFileExtension)(file.name) || "*"}`;
  // The spec for createImageBitmap() says the browser should try to sniff the
  // mime type, but it looks like Firefox does not. So we specify it here
  // explicitly.
  const typedBlob = new Blob([file.contents], { type: mimeType });
  return genImgFromBlob(typedBlob);
}

async function genSpriteUrisFromFilename(zip, fileName) {
  const img = await genImgFromFilename(zip, fileName);
  if (img == null) {
    return {};
  }
  return getSpriteUrisFromImg(img, _skinSprites2.default[fileName]);
}

async function getCursorFromFilename(zip, fileName) {
  const file = await genFileFromZip(zip, fileName, "CUR", "base64");
  return file && `data:image/x-win-bitmap;base64,${file.contents}`;
}

async function genPlaylistStyle(zip) {
  const pledit = await genFileFromZip(zip, "PLEDIT", "txt", "text");
  const data = pledit && (0, _utils.parseIni)(pledit.contents).text;
  if (!data) {
    // Corrupt or missing PLEDIT.txt file.
    return _constants.DEFAULT_PLAYLIST_STYLE;
  }

  // Winamp seems to permit colors that contain too many characters.
  // For compatibility with existing skins, we normalize them here.
  ["normal", "current", "normalbg", "selectedbg"].forEach(colorKey => {
    let color = data[colorKey];
    if (!color) {
      return;
    }
    if (color[0] !== "#") {
      color = `#${color}`;
    }
    data[colorKey] = color.slice(0, 7);
  });

  return (0, _extends3.default)({}, _constants.DEFAULT_PLAYLIST_STYLE, data);
}

async function genColors(zip) {
  const viscolor = await genFileFromZip(zip, "VISCOLOR", "txt", "text");
  return viscolor ? (0, _utils.parseViscolors)(viscolor.contents) : _constants.DEFAULT_VIS_COLORS;
}

async function genImages(zip) {
  const imageObjs = await _promise2.default.all((0, _keys2.default)(_skinSprites2.default).map(async fileName => genSpriteUrisFromFilename(zip, fileName)));
  // Merge all the objects into a single object. Tests assert that sprite keys are unique.
  return shallowMerge(imageObjs);
}
async function genCursors(zip) {
  const cursorObjs = await _promise2.default.all(CURSORS.map(async cursorName => ({
    [cursorName]: await getCursorFromFilename(zip, cursorName)
  })));
  return shallowMerge(cursorObjs);
}

async function genRegion(zip) {
  const region = await genFileFromZip(zip, "REGION", "txt", "text");
  return region ? (0, _regionParser2.default)(region.contents) : {};
}

async function genGenTextSprites(zip) {
  const img = await genImgFromFilename(zip, "GEN");
  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getLetters = (y, prefix) => {
    const getColorAt = x => context.getImageData(x, y, 1, 1).data.join(",");

    let x = 1;
    const backgroundColor = getColorAt(0);

    const height = 7;
    return _constants.LETTERS.map(letter => {
      let nextBackground = x;
      while (getColorAt(nextBackground) !== backgroundColor && nextBackground < canvas.width) {
        nextBackground++;
      }
      const width = nextBackground - x;
      const name = `${prefix}_${letter}`;
      const sprite = { x, y, height, width, name };
      x = nextBackground + 1;
      return sprite;
    });
  };

  const letterWidths = {};
  const sprites = [...getLetters(88, "GEN_TEXT_SELECTED"), ...getLetters(96, "GEN_TEXT")];
  sprites.forEach(sprite => {
    letterWidths[sprite.name] = sprite.width;
  });
  return [letterWidths, getSpriteUrisFromImg(img, sprites)];
}

// A promise that, given an array buffer  returns a skin style object
async function skinParser(zipFileBuffer) {
  const JSZip = await getJSZip();
  const zip = await JSZip.loadAsync(zipFileBuffer);

  var _ref = await _promise2.default.all([genColors(zip), genPlaylistStyle(zip), genImages(zip), genCursors(zip), genRegion(zip), genGenTextSprites(zip)]),
      _ref2 = (0, _slicedToArray3.default)(_ref, 6);

  const colors = _ref2[0],
        playlistStyle = _ref2[1],
        images = _ref2[2],
        cursors = _ref2[3],
        region = _ref2[4],
        genTextSprites = _ref2[5];

  var _ref3 = genTextSprites || [null, {}],
      _ref4 = (0, _slicedToArray3.default)(_ref3, 2);

  const genLetterWidths = _ref4[0],
        genTextImages = _ref4[1];


  return {
    colors,
    playlistStyle,
    images: (0, _extends3.default)({}, images, genTextImages),
    genLetterWidths,
    cursors,
    region
  };
}

exports.default = skinParser;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(222), __esModule: true };

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(29);
module.exports = __webpack_require__(223);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);
var ITERATOR = __webpack_require__(11)('iterator');
var Iterators = __webpack_require__(30);
module.exports = __webpack_require__(8).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(225), __esModule: true };

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(29);
module.exports = __webpack_require__(226);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(16);
var get = __webpack_require__(64);
module.exports = __webpack_require__(8).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

exports.pointPairs = pointPairs;
exports.default = regionParser;

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pointPairs(arr) {
  const pairedValues = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairedValues.push(`${arr[i]},${arr[i + 1]}`);
  }
  return pairedValues;
}

function regionParser(regionStr) {
  const iniData = (0, _utils.parseIni)(regionStr);
  const data = {};
  (0, _keys2.default)(iniData).forEach(section => {
    var _iniData$section = iniData[section];
    const numpoints = _iniData$section.numpoints,
          pointlist = _iniData$section.pointlist;

    if (!numpoints || !pointlist) {
      return;
    }
    const pointCounts = numpoints.split(/\s*,\s*/).filter(val => val !== "");
    const points = pointPairs(
    // points can be separated by spaces, or by commas
    pointlist.split(/\s*[, ]\s*/).filter(val => val !== ""));
    let pointIndex = 0;
    const polygons = pointCounts.map(numStr => {
      const num = Number(numStr);
      const polygon = points.slice(pointIndex, pointIndex + num).join(" ");
      if (!polygon.length) {
        // It's possible that the skin author specified more polygons than provided points.
        return null;
      }
      pointIndex += num;
      return polygon;
    });
    const validPolygons = polygons.filter(polygon => polygon != null);
    if (validPolygons.length) {
      data[section] = validPolygons;
    }
  });

  return data;
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(229), __esModule: true };

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(230);
module.exports = __webpack_require__(8).Object.values;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(10);
var $values = __webpack_require__(110)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPlaylistURL = exports.getAsDataURI = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAsDataURI = exports.getAsDataURI = text => `data:text/html;base64,${window.btoa(text)}`;

// Replaces deprecated "noshade" attribute
const noshadeStyle = {
  height: "2px",
  borderWidth: 0,
  color: "gray",
  backgroundColor: "gray"
};

// TODO: Move <html> tag out to the string creation step in order
// to avoid the warning.
const Playlist = props => _react2.default.createElement(
  "html",
  null,
  _react2.default.createElement(
    "head",
    null,
    _react2.default.createElement("link", { rel: "stylesheet", href: "null" }),
    _react2.default.createElement(
      "style",
      { type: "text/css" },
      `
        body { background: #000040; }
        .para1 { margin-top: -42px; margin-left: 145px; margin-right: 10px; font-family: "font2, Arial"; font-size: 30px; line-height: 35px; text-align: left; color: #E1E1E1; }
        .para2 { margin-top: 15px; margin-left: 15px; margin-right: 50px; font-family: "font1, Arial Black"; font-size: 50px; line-height: 40px; text-align: left; color: #004080; }
        `
    ),
    _react2.default.createElement(
      "title",
      null,
      "Winamp Generated PlayList"
    )
  ),
  _react2.default.createElement(
    "body",
    { bgcolor: "#000080", topmargin: "0", leftmargin: "0", text: "#FFFFFF" },
    _react2.default.createElement(
      "div",
      { align: "center" },
      _react2.default.createElement(
        "div",
        { className: "para2", align: "center" },
        _react2.default.createElement(
          "p",
          null,
          "WINAMP"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "para1", align: "center" },
        _react2.default.createElement(
          "p",
          null,
          "playlist"
        )
      )
    ),
    _react2.default.createElement("hr", {
      align: "left",
      width: "90%",
      size: "1",
      color: "#FFBF00",
      style: noshadeStyle
    }),
    _react2.default.createElement(
      "div",
      { align: "right" },
      _react2.default.createElement(
        "table",
        { border: "0", cellSpacing: "0", cellPadding: "0", width: "98%" },
        _react2.default.createElement(
          "tbody",
          null,
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              null,
              _react2.default.createElement(
                "small",
                null,
                _react2.default.createElement(
                  "small",
                  null,
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.numberOfTracks
                  ),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    " track in playlist, average track length: "
                  ),
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.averageTrackLength
                  )
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "small",
                null,
                _react2.default.createElement(
                  "small",
                  null,
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    "Playlist length: "
                  ),
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.playlistLengthMinutes
                  ),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    " minutes "
                  ),
                  _react2.default.createElement(
                    "font",
                    { face: "Arial", color: "#FFBF00" },
                    props.playlistLengthSeconds
                  ),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    " second "
                  ),
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "font",
                    { color: "#409FFF", face: "Arial" },
                    "Right-click ",
                    _react2.default.createElement(
                      "a",
                      { href: "./" },
                      "here"
                    ),
                    " to save this HTML file."
                  )
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "blockquote",
      null,
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "font",
          { color: "#FFBF00", face: "Arial" },
          _react2.default.createElement(
            "big",
            null,
            "Playlist files:"
          )
        )
      ),
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          "font",
          { face: "Arial", color: "#FFFFFF" },
          _react2.default.createElement(
            "small",
            null,
            props.tracks.map(track => _react2.default.createElement(
              "span",
              { key: track },
              track,
              _react2.default.createElement("br", null)
            ))
          )
        )
      )
    ),
    _react2.default.createElement("hr", {
      align: "left",
      width: "90%",
      size: "1",
      color: "#FFBF00",
      style: noshadeStyle
    })
  )
);

const createPlaylistHTML = props => {
  const node = document.createElement("div");
  (0, _reactDom.render)(_react2.default.createElement(Playlist, props), node);
  return node.innerHTML;
};

const createPlaylistURL = exports.createPlaylistURL = props => getAsDataURI(createPlaylistHTML(props));

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(234);
module.exports = __webpack_require__(8).Object.entries;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(10);
var $entries = __webpack_require__(110)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _invariant = __webpack_require__(106);

var _invariant2 = _interopRequireDefault(_invariant);

var _tinyqueue = __webpack_require__(236);

var _tinyqueue2 = _interopRequireDefault(_tinyqueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Push promises onto a queue with a priority.
// Run a given number of jobs in parallel
// Useful for prioritizing network requests
class LoadQueue {
  constructor({ threads }) {
    // TODO: Consider not running items with zero priority
    // Priority is a function so that items can change their priority between
    // when their priority is evaluated.
    // For example, we might add a track to the playlist and then scroll to/away
    // from it before it gets processed.
    this._queue = new _tinyqueue2.default([], (a, b) => a.priority() - b.priority());
    this._availableThreads = threads;
  }

  push(task, priority) {
    const t = { task, priority };
    this._queue.push(t);
    // Wait until the next event loop to pick a task to run. This way, we can
    // enqueue multiple items in an event loop, and be sure they will be run in
    // priority order.
    setTimeout(() => {
      this._run();
    }, 0);
    return () => {
      // TODO: Could return a boolean representing if the task has already been
      // kicke off.
      this._queue = this._queue.filter(t1 => t1 !== t);
    };
  }

  _run() {
    while (this._availableThreads > 0) {
      if (this._queue.length === 0) {
        return;
      }
      this._availableThreads--;
      const t = this._queue.pop();
      const promise = t.task();
      (0, _invariant2.default)(typeof promise.then === "function", `LoadQueue only supports loading Promises. Got ${promise}`);
      promise.then(() => {
        this._availableThreads++;
        this._run();
      });
    }
  }
}
exports.default = LoadQueue;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinyQueue;
module.exports.default = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(9);

var _ContextMenuWrapper = __webpack_require__(74);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _MainContextMenu = __webpack_require__(114);

var _MainContextMenu2 = _interopRequireDefault(_MainContextMenu);

var _WindowManager = __webpack_require__(243);

var _WindowManager2 = _interopRequireDefault(_WindowManager);

var _MainWindow = __webpack_require__(244);

var _MainWindow2 = _interopRequireDefault(_MainWindow);

var _PlaylistWindow = __webpack_require__(268);

var _PlaylistWindow2 = _interopRequireDefault(_PlaylistWindow);

var _EqualizerWindow = __webpack_require__(309);

var _EqualizerWindow2 = _interopRequireDefault(_EqualizerWindow);

var _GenWindow = __webpack_require__(319);

var _GenWindow2 = _interopRequireDefault(_GenWindow);

var _Skin = __webpack_require__(322);

var _Skin2 = _interopRequireDefault(_Skin);

__webpack_require__(324);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = ({
  media,
  closed,
  genWindowsInfo,
  container,
  filePickers,
  genWindowComponents
}) => {
  if (closed) {
    return null;
  }

  const windows = (0, _utils.objectMap)(genWindowsInfo, (w, id) => {
    if (!w.open) {
      return null;
    }
    switch (id) {
      case "main":
        return _react2.default.createElement(_MainWindow2.default, { mediaPlayer: media, filePickers: filePickers });
      case "equalizer":
        return _react2.default.createElement(_EqualizerWindow2.default, null);
      case "playlist":
        return _react2.default.createElement(_PlaylistWindow2.default, null);
      default:
        if (!w.generic) {
          throw new Error("Tried to render an unknown window:", id);
        }
        const Component = genWindowComponents[id];
        return _react2.default.createElement(
          _GenWindow2.default,
          { title: w.title, windowId: id },
          ({ height, width }) => _react2.default.createElement(Component, {
            analyser: media._analyser,
            width: width,
            height: height
          })
        );
    }
  });

  return _react2.default.createElement(
    "div",
    { role: "application", id: "webamp" },
    _react2.default.createElement(_Skin2.default, null),
    _react2.default.createElement(
      _ContextMenuWrapper2.default,
      {
        renderContents: () => _react2.default.createElement(_MainContextMenu2.default, { filePickers: filePickers })
      },
      _react2.default.createElement(_WindowManager2.default, { windows: windows, container: container })
    )
  );
};

App.propTypes = {
  container: _propTypes2.default.instanceOf(Element)
};

const mapStateToProps = state => ({
  closed: state.display.closed,
  genWindowsInfo: state.windows.genWindows
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./context-menu.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./context-menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#context-menu {\n    left: 0px;\n}\n\n#context-menu.bottom {\n    top: 12px;\n}\n\n#context-menu.top {\n    top: 0px;\n}\n\n#context-menu,\n#context-menu ul {\n    z-index: 50; /* Gross */\n    background-color: #ffffff;\n    position: absolute;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    border: 1px solid #a7a394;\n    cursor: default;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#context-menu li {\n    position: relative;\n    font-family: \"Tahoma\";\n    font-size: 11px;\n    color: black;\n    white-space: nowrap;\n    margin: 2px;\n    padding: 1px 18px 3px 18px;\n    display: block;\n}\n\n#context-menu li.checked:before {\n    float: left;\n    /* TODO: Use an image */\n    content: \"\\2713\";\n    margin-left: -12px;\n}\n\n#context-menu li.parent:after {\n    float: right;\n    content: \"\\25B8\";\n    margin-right: -12px;\n}\n#context-menu li a {\n    text-decoration: none;\n    color: black;\n    cursor: default;\n}\n\n#context-menu li:hover,\n#context-menu li:hover a {\n    background-color: #224eb7;\n    color: #ffffff;\n}\n\n#context-menu li.hr {\n    padding: 2px 0;\n}\n\n#context-menu li.hr:hover {\n    background-color: #ffffff;\n}\n\n#context-menu li.hr hr {\n    border: none;\n    height: 1px;\n    background-color: #a7a394;\n    margin: 0;\n    padding: 0;\n}\n\n#context-menu ul {\n    display: none;\n    left: 100%;\n    margin-left: -3px;\n}\n\n#context-menu li:hover ul {\n    display: block;\n}\n", ""]);

// exports


/***/ }),
/* 240 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaybackContextMenu = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_ContextMenu.Node, { label: "Previous", hotkey: "Z", onClick: props.previous }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Play", hotkey: "X", onClick: props.play }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Pause", hotkey: "C", onClick: props.pause }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Stop", hotkey: "V", onClick: props.stop }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Next", hotkey: "B", onClick: props.next }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, {
    label: "Back 5 seconds",
    hotkey: "Left",
    onClick: () => props.seekBackward(5)
  }),
  _react2.default.createElement(_ContextMenu.Node, {
    label: "Fwd 5 seconds",
    hotkey: "Right",
    onClick: () => props.seekForward(5)
  }),
  _react2.default.createElement(_ContextMenu.Node, { label: "10 tracks back", hotkey: "Num. 1", onClick: () => (0, _actionCreators.nextN)(-10) }),
  _react2.default.createElement(_ContextMenu.Node, { label: "10 tracks fwd", hotkey: "Num. 3", onClick: () => (0, _actionCreators.nextN)(10) })
);

const mapDispatchToProps = {
  previous: _actionCreators.previous,
  play: _actionCreators.play,
  pause: _actionCreators.pause,
  stop: _actionCreators.stop,
  next: _actionCreators.next,
  seekForward: _actionCreators.seekForward,
  seekBackward: _actionCreators.seekBackward
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PlaybackContextMenu);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SkinContextMenu = props => _react2.default.createElement(
  _ContextMenu.Parent,
  { label: "Skins" },
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.openSkinFileDialog, label: "Load Skin..." }),
  !!props.availableSkins.length && _react2.default.createElement(_ContextMenu.Hr, null),
  props.availableSkins.map(skin => _react2.default.createElement(_ContextMenu.Node, {
    key: skin.url,
    onClick: () => props.setSkin(skin.url),
    label: skin.name
  }))
);

const mapStateToProps = state => ({
  availableSkins: state.settings.availableSkins
});

const mapDispatchToProps = {
  openSkinFileDialog: _actionCreators.openSkinFileDialog,
  setSkin: _actionCreators.setSkinFromUrl
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SkinContextMenu);

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = __webpack_require__(32);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = __webpack_require__(107);

var _from2 = _interopRequireDefault(_from);

var _set = __webpack_require__(71);

var _set2 = _interopRequireDefault(_set);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _snapUtils = __webpack_require__(113);

var _selectors = __webpack_require__(7);

var _actionCreators = __webpack_require__(2);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const abuts = (a, b) => {
  // TODO: This is kinda a hack. They should really be touching, not just within snapping distance.
  // Also, overlapping should not count.
  const wouldMoveTo = (0, _snapUtils.snap)(a, b);
  return wouldMoveTo.x !== undefined || wouldMoveTo.y !== undefined;
};

class WindowManager extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.centerWindows = this.centerWindows.bind(this);
  }

  componentDidMount() {
    this.centerWindows();
  }

  centerWindows() {
    let offsetLeft = 0;
    let offsetTop = 0;
    // https://j11y.io/snippets/get-document-height-cross-browser/
    let width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth, document.documentElement.offsetWidth);
    let height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight, document.documentElement.offsetHeight);

    const container = this.props.container;

    if (container != null) {
      offsetLeft = container.offsetLeft;
      offsetTop = container.offsetTop;
      width = container.scrollWidth;
      height = container.scrollHeight;
    }

    if (this.props.windowsInfo.some(w => w.x == null || w.y == null)) {
      // Some windows do not have an initial position, so we'll come up
      // with your own layout.
      const windowPositions = {};
      const keys = this.windowKeys();
      const totalHeight = keys.length * _constants.WINDOW_HEIGHT;
      keys.forEach((key, i) => {
        const offset = _constants.WINDOW_HEIGHT * i;
        windowPositions[key] = {
          x: Math.ceil(offsetLeft + (width / 2 - _constants.WINDOW_WIDTH / 2)),
          y: Math.ceil(offsetTop + (height / 2 - totalHeight / 2 + offset))
        };
      });
      this.props.updateWindowPositions(windowPositions);
    } else {
      // A layout has been suplied. We will compute the bounding box and
      // center the given layout.
      const info = this.props.windowsInfo;
      const bounding = info.reduce((b, w) => ({
        left: Math.min(b.left, w.x),
        top: Math.min(b.top, w.y),
        bottom: Math.max(b.bottom, w.y + w.height),
        right: Math.max(b.right, w.x + w.width)
      }), { top: 0, bottom: 0, left: 0, right: 0 });

      const boxHeight = bounding.bottom - bounding.top;
      const boxWidth = bounding.right - bounding.left;

      const move = {
        x: offsetLeft + (width - boxWidth) / 2,
        y: offsetTop + (height - boxHeight) / 2
      };

      const newPositions = info.reduce((pos, w) => (0, _extends3.default)({}, pos, { [w.key]: { x: move.x + w.x, y: move.y + w.y } }), {});

      this.props.updateWindowPositions(newPositions);
    }
  }

  movingAndStationaryNodes(key) {
    const windows = this.props.windowsInfo;
    const targetNode = windows.find(node => node.key === key);

    let movingSet = new _set2.default([targetNode]);
    // Only the main window brings other windows along.
    if (key === "main") {
      const findAllConnected = (0, _snapUtils.traceConnection)(abuts);
      movingSet = findAllConnected(windows, targetNode);
    }

    const stationary = windows.filter(w => !movingSet.has(w));
    const moving = (0, _from2.default)(movingSet);

    return [moving, stationary];
  }

  handleMouseDown(key, e) {
    if (!e.target.classList.contains("draggable")) {
      return;
    }
    // Prevent dragging from highlighting text.
    e.preventDefault();

    var _movingAndStationaryN = this.movingAndStationaryNodes(key),
        _movingAndStationaryN2 = (0, _slicedToArray3.default)(_movingAndStationaryN, 2);

    const moving = _movingAndStationaryN2[0],
          stationary = _movingAndStationaryN2[1];


    const mouseStart = { x: e.clientX, y: e.clientY };
    const browserSize = {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    };

    const box = (0, _snapUtils.boundingBox)(moving);

    const handleMouseMove = ee => {
      const proposedDiff = {
        x: ee.clientX - mouseStart.x,
        y: ee.clientY - mouseStart.y
      };

      const proposedWindows = moving.map(node => (0, _extends3.default)({}, node, (0, _snapUtils.applyDiff)(node, proposedDiff)));

      const proposedBox = (0, _extends3.default)({}, box, (0, _snapUtils.applyDiff)(box, proposedDiff));

      const snapDiff = (0, _snapUtils.snapDiffManyToMany)(proposedWindows, stationary);

      const withinDiff = (0, _snapUtils.snapWithinDiff)(proposedBox, browserSize);

      const finalDiff = (0, _snapUtils.applyMultipleDiffs)(proposedDiff, snapDiff, withinDiff);

      const windowPositionDiff = moving.reduce((diff, window) => {
        diff[window.key] = (0, _snapUtils.applyDiff)(window, finalDiff);
        return diff;
      }, {});

      this.props.updateWindowPositions(windowPositionDiff);
    };

    const removeListeners = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", removeListeners);
    };

    window.addEventListener("mouseup", removeListeners);
    window.addEventListener("mousemove", handleMouseMove);
  }

  // Keys for the visible windows
  windowKeys() {
    // TODO: Iterables can probably do this better.
    return (0, _keys2.default)(this.props.windows).filter(key => !!this.props.windows[key]);
  }

  render() {
    const style = {
      position: "absolute"
    };

    const parentStyle = {
      position: "absolute",
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
    return _react2.default.createElement(
      "div",
      { style: parentStyle },
      this.props.windowsInfo.map(w => _react2.default.createElement(
        "div",
        {
          onMouseDown: e => this.handleMouseDown(w.key, e),
          style: (0, _extends3.default)({}, style, { left: w.x, top: w.y }),
          key: w.key
        },
        this.props.windows[w.key]
      ))
    );
  }
}

WindowManager.propTypes = {
  windows: _propTypes2.default.object.isRequired,
  container: _propTypes2.default.instanceOf(Element)
};

const mapStateToProps = state => ({
  windowsInfo: (0, _selectors.getWindowsInfo)(state)
});

const mapDispatchToProps = {
  updateWindowPositions: _actionCreators.updateWindowPositions
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(WindowManager);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainWindow = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

var _DropTarget = __webpack_require__(115);

var _DropTarget2 = _interopRequireDefault(_DropTarget);

var _MiniTime = __webpack_require__(116);

var _MiniTime2 = _interopRequireDefault(_MiniTime);

var _actionTypes = __webpack_require__(3);

var _ClickedDiv = __webpack_require__(49);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _ContextMenuTarget = __webpack_require__(75);

var _ContextMenuTarget2 = _interopRequireDefault(_ContextMenuTarget);

var _ActionButtons = __webpack_require__(247);

var _ActionButtons2 = _interopRequireDefault(_ActionButtons);

var _MainBalance = __webpack_require__(248);

var _MainBalance2 = _interopRequireDefault(_MainBalance);

var _Close = __webpack_require__(249);

var _Close2 = _interopRequireDefault(_Close);

var _ClutterBar = __webpack_require__(250);

var _ClutterBar2 = _interopRequireDefault(_ClutterBar);

var _MainContextMenu = __webpack_require__(114);

var _MainContextMenu2 = _interopRequireDefault(_MainContextMenu);

var _Eject = __webpack_require__(251);

var _Eject2 = _interopRequireDefault(_Eject);

var _EqToggleButton = __webpack_require__(252);

var _EqToggleButton2 = _interopRequireDefault(_EqToggleButton);

var _PlaylistToggleButton = __webpack_require__(253);

var _PlaylistToggleButton2 = _interopRequireDefault(_PlaylistToggleButton);

var _Kbps = __webpack_require__(254);

var _Kbps2 = _interopRequireDefault(_Kbps);

var _Khz = __webpack_require__(255);

var _Khz2 = _interopRequireDefault(_Khz);

var _Marquee = __webpack_require__(256);

var _Marquee2 = _interopRequireDefault(_Marquee);

var _MonoStereo = __webpack_require__(257);

var _MonoStereo2 = _interopRequireDefault(_MonoStereo);

var _Position = __webpack_require__(258);

var _Position2 = _interopRequireDefault(_Position);

var _Repeat = __webpack_require__(259);

var _Repeat2 = _interopRequireDefault(_Repeat);

var _Shade = __webpack_require__(260);

var _Shade2 = _interopRequireDefault(_Shade);

var _Minimize = __webpack_require__(261);

var _Minimize2 = _interopRequireDefault(_Minimize);

var _Shuffle = __webpack_require__(262);

var _Shuffle2 = _interopRequireDefault(_Shuffle);

var _Time = __webpack_require__(263);

var _Time2 = _interopRequireDefault(_Time);

var _Visualizer = __webpack_require__(264);

var _Visualizer2 = _interopRequireDefault(_Visualizer);

var _MainVolume = __webpack_require__(265);

var _MainVolume2 = _interopRequireDefault(_MainVolume);

__webpack_require__(266);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainWindow extends _react2.default.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleDrop = this._handleDrop.bind(this);
  }

  _handleClick() {
    this.props.setFocus();
  }

  _handleDrop(e) {
    this.props.loadFilesFromReferences(e);
  }

  render() {
    var _props = this.props;
    const focused = _props.focused,
          loading = _props.loading,
          doubled = _props.doubled,
          mainShade = _props.mainShade,
          llama = _props.llama,
          status = _props.status,
          working = _props.working,
          filePickers = _props.filePickers;


    const className = (0, _classnames2.default)({
      window: true,
      play: status === "PLAYING",
      stop: status === "STOPPED",
      pause: status === "PAUSED",
      selected: focused === _constants.WINDOWS.MAIN,
      shade: mainShade,
      draggable: true,
      loading,
      doubled,
      llama
    });

    return _react2.default.createElement(
      _DropTarget2.default,
      {
        id: "main-window",
        className: className,
        onMouseDown: this._handleClick,
        handleDrop: this._handleDrop,
        onWheel: this.props.scrollVolume
      },
      _react2.default.createElement(
        "div",
        {
          id: "title-bar",
          className: "selected title-bard draggable",
          onDoubleClick: this.props.toggleMainWindowShadeMode
        },
        _react2.default.createElement(
          _ContextMenuTarget2.default,
          {
            id: "option-context",
            bottom: true,
            handle: _react2.default.createElement(_ClickedDiv2.default, { id: "option", title: "Winamp Menu" })
          },
          _react2.default.createElement(_MainContextMenu2.default, { filePickers: filePickers })
        ),
        mainShade && _react2.default.createElement(_MiniTime2.default, null),
        _react2.default.createElement(_Minimize2.default, null),
        _react2.default.createElement(_Shade2.default, null),
        _react2.default.createElement(_Close2.default, null)
      ),
      _react2.default.createElement(
        "div",
        { className: "status" },
        _react2.default.createElement(_ClutterBar2.default, null),
        !working && _react2.default.createElement("div", { id: "play-pause" }),
        _react2.default.createElement("div", {
          id: "work-indicator",
          className: (0, _classnames2.default)({ selected: working })
        }),
        _react2.default.createElement(_Time2.default, null)
      ),
      _react2.default.createElement(_Visualizer2.default, { analyser: this.props.mediaPlayer._analyser }),
      _react2.default.createElement(
        "div",
        { className: "media-info" },
        _react2.default.createElement(_Marquee2.default, null),
        _react2.default.createElement(_Kbps2.default, null),
        _react2.default.createElement(_Khz2.default, null),
        _react2.default.createElement(_MonoStereo2.default, null)
      ),
      _react2.default.createElement(_MainVolume2.default, null),
      _react2.default.createElement(_MainBalance2.default, null),
      _react2.default.createElement(
        "div",
        { className: "windows" },
        _react2.default.createElement(_EqToggleButton2.default, null),
        _react2.default.createElement(_PlaylistToggleButton2.default, null)
      ),
      _react2.default.createElement(_Position2.default, null),
      _react2.default.createElement(_ActionButtons2.default, null),
      _react2.default.createElement(_Eject2.default, null),
      _react2.default.createElement(
        "div",
        { className: "shuffle-repeat" },
        _react2.default.createElement(_Shuffle2.default, null),
        _react2.default.createElement(_Repeat2.default, null)
      ),
      _react2.default.createElement("a", {
        id: "about",
        target: "blank",
        href: "https://github.com/captbaritone/webamp",
        title: "About"
      })
    );
  }
}

exports.MainWindow = MainWindow;
const mapStateToProps = state => {
  const status = state.media.status;
  var _state$display = state.display;
  const loading = _state$display.loading,
        doubled = _state$display.doubled,
        llama = _state$display.llama,
        working = _state$display.working,
        focused = state.windows.focused;

  return {
    mainShade: (0, _selectors.getWindowShade)(state, "main"),
    status,
    loading,
    doubled,
    llama,
    working,
    focused
  };
};

const mapDispatchToProps = {
  setFocus: () => ({ type: _actionTypes.SET_FOCUSED_WINDOW, window: _constants.WINDOWS.MAIN }),
  loadFilesFromReferences: e => (0, _actionCreators.loadFilesFromReferences)(e.dataTransfer.files),
  removeAllTracks: _actionCreators.removeAllTracks,
  toggleMainWindowShadeMode: _actionCreators.toggleMainWindowShadeMode,
  scrollVolume: _actionCreators.scrollVolume
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainWindow);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./mini-time.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./mini-time.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#webamp .mini-time {\n    display: block;\n    height: 6px;\n    width: 25px;\n}\n\n#webamp .mini-time.blinking .character:not(.background-character) {\n    animation: blink 2s step-start 1s infinite;\n    -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .mini-time .background-character {\n    z-index: 1;\n}\n\n#webamp .mini-time .character {\n    position: absolute;\n    top: 0;\n    z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionButtons = props => _react2.default.createElement(
  "div",
  { className: "actions" },
  _react2.default.createElement("div", { id: "previous", onClick: props.previous, title: "Previous Track" }),
  _react2.default.createElement("div", { id: "play", onClick: props.play, title: "Play" }),
  _react2.default.createElement("div", { id: "pause", onClick: props.pause, title: "Pause" }),
  _react2.default.createElement("div", { id: "stop", onClick: props.stop, title: "Stop" }),
  _react2.default.createElement("div", { id: "next", onClick: props.next, title: "Next Track" })
);

const mapDispatchToProps = { previous: _actionCreators.previous, play: _actionCreators.play, pause: _actionCreators.pause, stop: _actionCreators.stop, next: _actionCreators.next };

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ActionButtons);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offsetFromBalance = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Balance = __webpack_require__(118);

var _Balance2 = _interopRequireDefault(_Balance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const offsetFromBalance = exports.offsetFromBalance = balance => {
  const percent = Math.abs(balance) / 100;
  const sprite = Math.floor(percent * 27);
  const offset = sprite * 15;
  return offset;
};

const MainBalance = props => _react2.default.createElement(_Balance2.default, {
  id: "balance",
  style: { backgroundPosition: `0 -${offsetFromBalance(props.balance)}px` }
});

const mapStateToProps = state => ({ balance: state.media.balance });

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainBalance);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ClickedDiv = __webpack_require__(49);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Close = ({ onClick }) => _react2.default.createElement(_ClickedDiv2.default, { id: "close", onClick: onClick, title: "Close" });

exports.default = (0, _reactRedux.connect)(null, { onClick: _actionCreators.close })(Close);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ClutterBar = props => _react2.default.createElement(
  "div",
  { id: "clutter-bar" },
  _react2.default.createElement("div", { id: "button-o" }),
  _react2.default.createElement("div", { id: "button-a" }),
  _react2.default.createElement("div", { id: "button-i" }),
  _react2.default.createElement("div", {
    title: "Toggle Doublesize Mode",
    id: "button-d",
    className: (0, _classnames2.default)({ selected: props.doubled }),
    onMouseUp: props.handleMouseUp,
    onMouseDown: props.handleMouseDown
  }),
  _react2.default.createElement("div", { id: "button-v" })
);

const mapStateToProps = state => ({
  doubled: state.display.doubled
});

const mapDispatchToProps = dispatch => ({
  handleMouseDown: () => dispatch({ type: _actionTypes.SET_FOCUS, input: "double" }),
  handleMouseUp: () => {
    dispatch((0, _actionCreators.toggleDoubleSizeMode)());
    dispatch({ type: _actionTypes.UNSET_FOCUS });
  }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ClutterBar);

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Eject = props => _react2.default.createElement("div", { id: "eject", onClick: props.openMediaFileDialog, title: "Open File(s)" });

const mapDispatchToProps = { openMediaFileDialog: _actionCreators.openMediaFileDialog };

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Eject);

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(7);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqToggleButton = props => _react2.default.createElement("div", {
  id: "equalizer-button",
  className: (0, _classnames2.default)({ selected: props.equalizer }),
  onClick: props.handleClick,
  title: "Toggle Graphical Equalizer"
});

const mapStateToProps = state => ({
  equalizer: (0, _selectors.getWindowOpen)(state, "equalizer")
});

const mapDispatchToProps = {
  handleClick: () => (0, _actionCreators.toggleWindow)("equalizer")
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EqToggleButton);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(7);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaylistToggleButton = props => _react2.default.createElement("div", {
  id: "playlist-button",
  className: (0, _classnames2.default)({ selected: props.playlist }),
  onClick: props.handleClick,
  title: "Toggle Playlist Editor"
});

const mapStateToProps = state => ({
  playlist: (0, _selectors.getWindowOpen)(state, "playlist")
});

const mapDispatchToProps = {
  handleClick: () => (0, _actionCreators.toggleWindow)("playlist")
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlaylistToggleButton);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _CharacterString = __webpack_require__(41);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Kbps = props => _react2.default.createElement(
  _CharacterString2.default,
  { id: "kbps" },
  props.kbps
);

exports.default = (0, _reactRedux.connect)(state => ({ kbps: state.media.kbps }))(Kbps);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _CharacterString = __webpack_require__(41);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Khz = props => _react2.default.createElement(
  _CharacterString2.default,
  { id: "khz" },
  props.khz
);

exports.default = (0, _reactRedux.connect)(state => state.media)(Khz);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loopText = exports.pixelUnits = exports.stepOffset = exports.getEqText = exports.getDoubleSizeModeText = exports.getPositionText = exports.getVolumeText = exports.getBalanceText = exports.mod = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

var _CharacterString = __webpack_require__(41);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Single line text display that can animate and hold multiple registers
// Knows how to display various modes like tracking, volume, balance, etc.
const CHAR_WIDTH = 5;

// Always positive modulus
const mod = exports.mod = (n, m) => (n % m + m) % m;

const getBalanceText = exports.getBalanceText = balance => {
  if (balance === 0) {
    return "Balance: Center";
  }
  const direction = balance > 0 ? "Right" : "Left";
  return `Balance: ${Math.abs(balance)}% ${direction}`;
};

const getVolumeText = exports.getVolumeText = volume => `Volume: ${volume}%`;

const getPositionText = exports.getPositionText = (duration, seekToPercent) => {
  const newElapsedStr = (0, _utils.getTimeStr)(duration * seekToPercent / 100, false);
  const durationStr = (0, _utils.getTimeStr)(duration, false);
  return `Seek to: ${newElapsedStr}/${durationStr} (${seekToPercent}%)`;
};

const getDoubleSizeModeText = exports.getDoubleSizeModeText = enabled => `${enabled ? "Disable" : "Enable"} doublesize mode`;

const formatHz = hz => hz < 1000 ? `${hz}HZ` : `${hz / 1000}KHZ`;

// Format a number as a string, ensuring it has a + or - sign
const ensureSign = num => num > 0 ? `+${num}` : num.toString();

// Round to 1 and exactly 1 decimal point
const roundToTenths = num => (Math.round(num * 10) / 10).toFixed(1);

const getEqText = exports.getEqText = (band, level) => {
  const db = roundToTenths((level - 50) / 50 * 12);
  const label = band === "preamp" ? "Preamp" : formatHz(band);
  return `EQ: ${label} ${ensureSign(db)} DB`;
};

const isLong = text => text.length > 30;

// Given text and step, how many pixels should it be shifted?
const stepOffset = exports.stepOffset = (text, step, pixels) => {
  if (!isLong(text)) {
    return 0;
  }

  const stepOffsetWidth = step * CHAR_WIDTH; // Steps move one char at a time
  const offset = stepOffsetWidth + pixels;
  const stringLength = text.length * CHAR_WIDTH;

  return mod(offset, stringLength);
};

// Format an int as pixels
const pixelUnits = exports.pixelUnits = pixels => `${pixels}px`;

// If text is wider than the marquee, it needs to loop
const loopText = exports.loopText = text => isLong(text) ? text + text : text;

class Marquee extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { stepping: true, dragOffset: 0 };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.stepHandle = null;
  }

  componentDidMount() {
    this.stepHandle = setInterval(() => {
      if (this.state.stepping) {
        this.props.dispatch({ type: _actionTypes.STEP_MARQUEE });
      }
    }, 220);
  }

  componentWillUnmount() {
    if (this.stepHandle) {
      clearTimeout(this.stepHandle);
    }
  }

  handleMouseDown(e) {
    const xStart = e.clientX;
    this.setState({ stepping: false });
    const handleMouseMove = ee => {
      const diff = ee.clientX - xStart;
      this.setState({ dragOffset: -diff });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // TODO: Remove this listener
      setTimeout(() => {
        this.setState({ stepping: true });
      }, 1000);
      document.removeEventListener("mouseUp", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  render() {
    var _props = this.props;
    const text = _props.text,
          marqueeStep = _props.marqueeStep;

    const offset = stepOffset(text, marqueeStep, this.state.dragOffset);
    const marginLeft = pixelUnits(-offset);
    return _react2.default.createElement(
      "div",
      {
        id: "marquee",
        className: "text",
        onMouseDown: this.handleMouseDown,
        title: "Song Title"
      },
      _react2.default.createElement(
        _CharacterString2.default,
        { style: { marginLeft } },
        loopText(text)
      )
    );
  }
}

const getMarqueeText = state => {
  if (state.userInput.userMessage != null) {
    return state.userInput.userMessage;
  }
  switch (state.userInput.focus) {
    case "balance":
      return getBalanceText(state.media.balance);
    case "volume":
      return getVolumeText(state.media.volume);
    case "position":
      return getPositionText(state.media.length, state.userInput.scrubPosition);
    case "double":
      return getDoubleSizeModeText(state.display.doubled);
    case "eq":
      const band = state.userInput.bandFocused;
      return getEqText(band, state.equalizer.sliders[band]);
    default:
      break;
  }
  if (state.playlist.currentTrack != null) {
    return (0, _selectors.getMediaText)(state);
  }
  return "Winamp 2.91";
};

// TODO: Define map state to props
exports.default = (0, _reactRedux.connect)(state => ({
  marqueeStep: state.display.marqueeStep,
  text: getMarqueeText(state)
}))(Marquee);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MonoStereo = props => _react2.default.createElement(
  "div",
  { className: "mono-stereo" },
  _react2.default.createElement("div", {
    id: "stereo",
    className: (0, _classnames2.default)({ selected: props.channels === 2 })
  }),
  _react2.default.createElement("div", { id: "mono", className: (0, _classnames2.default)({ selected: props.channels === 1 }) })
);

exports.default = (0, _reactRedux.connect)(state => ({ channels: state.media.channels }))(MonoStereo);

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Position = ({
  position,
  seekToPercentComplete,
  displayedPosition,
  setPosition
}) => {
  // In shade mode, the position slider shows up differently depending on if
  // it's near the start, middle or end of its progress
  let className = "";
  if (position <= 33) {
    className = "left";
  } else if (position >= 66) {
    className = "right";
  }

  return _react2.default.createElement("input", {
    id: "position",
    className: className,
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: displayedPosition,
    onInput: setPosition,
    onMouseUp: seekToPercentComplete,
    onMouseDown: setPosition,
    title: "Seeking Bar"
  });
};

const mapStateToProps = ({ media, userInput }) => {
  let position;
  if (media.length) {
    position = Math.floor(media.timeElapsed) / media.length * 100;
  } else {
    position = 0;
  }

  const displayedPosition = userInput.focus === "position" ? userInput.scrubPosition : position;

  return {
    displayedPosition,
    position
  };
};

const mapDispatchToProps = dispatch => ({
  seekToPercentComplete: e => {
    dispatch({ type: _actionTypes.SEEK_TO_PERCENT_COMPLETE, percent: e.target.value });
    dispatch({ type: _actionTypes.UNSET_FOCUS });
  },
  setPosition: e => {
    dispatch({ type: _actionTypes.SET_FOCUS, input: "position" });
    dispatch({ type: _actionTypes.SET_SCRUB_POSITION, position: e.target.value });
  }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Position);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionCreators = __webpack_require__(2);

var _ContextMenuWrapper = __webpack_require__(74);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _ContextMenu = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Repeat = ({ repeat, handleClick }) => _react2.default.createElement(
  _ContextMenuWrapper2.default,
  {
    renderContents: () => _react2.default.createElement(_ContextMenu.Node, {
      checked: repeat,
      label: "Repeat",
      onClick: handleClick,
      hotkey: "(R)"
    })
  },
  _react2.default.createElement("div", {
    id: "repeat",
    className: (0, _classnames2.default)({ selected: repeat }),
    onClick: handleClick,
    title: "Toggle Repeat"
  })
);

const mapStateToProps = state => ({
  repeat: state.media.repeat
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch((0, _actionCreators.toggleRepeat)())
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Repeat);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ClickedDiv = __webpack_require__(49);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shade = props => _react2.default.createElement(_ClickedDiv2.default, {
  id: "shade",
  onMouseDown: props.handleClick,
  onDoubleClick: e => e.stopPropagation(),
  title: "Toggle Windowshade Mode"
});

const mapDispatchToProps = {
  handleClick: _actionCreators.toggleMainWindowShadeMode
};

exports.default = (0, _reactRedux.connect)(() => ({}), mapDispatchToProps)(Shade);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ClickedDiv = __webpack_require__(49);

var _ClickedDiv2 = _interopRequireDefault(_ClickedDiv);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Minimize = ({ minimize }) => _react2.default.createElement(_ClickedDiv2.default, { id: "minimize", title: "Minimize", onClick: minimize });

const mapDispatchToProps = {
  minimize: () => ({ type: _actionTypes.MINIMIZE_WINAMP })
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Minimize);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionCreators = __webpack_require__(2);

var _ContextMenuWrapper = __webpack_require__(74);

var _ContextMenuWrapper2 = _interopRequireDefault(_ContextMenuWrapper);

var _ContextMenu = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shuffle = ({ shuffle, handleClick }) => _react2.default.createElement(
  _ContextMenuWrapper2.default,
  {
    renderContents: () => _react2.default.createElement(_ContextMenu.Node, {
      checked: shuffle,
      label: "Shuffle",
      onClick: handleClick,
      hotkey: "(S)"
    })
  },
  _react2.default.createElement("div", {
    id: "shuffle",
    className: (0, _classnames2.default)({ selected: shuffle }),
    onClick: handleClick,
    title: "Toggle Shuffle"
  })
);
const mapStateToProps = state => ({
  shuffle: state.media.shuffle
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch((0, _actionCreators.toggleShuffle)())
});
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Shuffle);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Time = ({ timeElapsed, length, timeMode, toggleTimeMode }) => {
  const seconds = timeMode === "ELAPSED" ? timeElapsed : length - timeElapsed;

  const timeObj = (0, _utils.getTimeObj)(seconds);
  return _react2.default.createElement(
    "div",
    { id: "time", onClick: toggleTimeMode, className: "countdown" },
    timeMode === "REMAINING" && _react2.default.createElement("div", { id: "minus-sign" }),
    _react2.default.createElement("div", {
      id: "minute-first-digit",
      className: `digit digit-${timeObj.minutesFirstDigit}`
    }),
    _react2.default.createElement("div", {
      id: "minute-second-digit",
      className: `digit digit-${timeObj.minutesSecondDigit}`
    }),
    _react2.default.createElement("div", {
      id: "second-first-digit",
      className: `digit digit-${timeObj.secondsFirstDigit}`
    }),
    _react2.default.createElement("div", {
      id: "second-second-digit",
      className: `digit digit-${timeObj.secondsSecondDigit}`
    })
  );
};

const mapStateToProps = state => state.media;
const mapDispatchToProps = dispatch => ({
  toggleTimeMode: () => dispatch({ type: _actionTypes.TOGGLE_TIME_MODE })
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Time);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OSCILLOSCOPE = 1;
const BAR = 2;
const PIXEL_DENSITY = 2;
const BAR_WIDTH = 6;
const GRADIENT_COLOR_COUNT = 16;
const PEAK_COLOR_INDEX = 23;

// Return the average value in a slice of dataArray
function sliceAverage(dataArray, sliceWidth, sliceNumber) {
  const start = sliceWidth * sliceNumber;
  const end = start + sliceWidth;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += dataArray[i];
  }
  return sum / sliceWidth;
}

class Visualizer extends _react2.default.Component {
  componentDidMount() {
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;

    this.setStyle();

    // Kick off the animation loop
    const loop = () => {
      if (this.props.status === "PLAYING") {
        this.paintFrame();
      }
      window.requestAnimationFrame(loop);
    };
    loop();
  }

  componentDidUpdate() {
    this.setStyle();
    // Redraw the current frame, since the skin may have changed.
    this.paintFrame();
  }

  _renderWidth() {
    return this.props.width;
  }

  _renderHeight() {
    return this.props.height;
  }

  _height() {
    return this.props.height * PIXEL_DENSITY;
  }

  _width() {
    return this.props.width * PIXEL_DENSITY;
  }

  setStyle() {
    if (!this.props.colors) {
      return;
    }
    // TODO: Split this into to methods. One for skin update, one for style
    // update.
    this.preRenderBg();
    this.preRenderBar();
    if (this.props.style === OSCILLOSCOPE) {
      this.props.analyser.fftSize = 2048;
      this.bufferLength = this.props.analyser.fftSize;
      this.dataArray = new Uint8Array(this.bufferLength);
    } else if (this.props.style === BAR) {
      this.props.analyser.fftSize = 64; // Must be a power of two
      // Number of bins/bars we get
      this.bufferLength = this.props.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
    }
  }

  clear() {
    this.canvasCtx.drawImage(this.bgCanvas, 0, 0);
  }

  // Pre-render the background grid
  preRenderBg() {
    // Off-screen canvas for pre-rendering the background
    this.bgCanvas = document.createElement("canvas");
    this.bgCanvas.width = this._width();
    this.bgCanvas.height = this._height();

    const bgCanvasCtx = this.bgCanvas.getContext("2d");
    bgCanvasCtx.fillStyle = this.props.colors[0];
    bgCanvasCtx.fillRect(0, 0, this._width(), this._height());
    if (this.props.spekles) {
      bgCanvasCtx.fillStyle = this.props.colors[1];
      for (let x = 0; x < this._width(); x += 4) {
        for (let y = PIXEL_DENSITY; y < this._height(); y += 4) {
          bgCanvasCtx.fillRect(x, y, PIXEL_DENSITY, PIXEL_DENSITY);
        }
      }
    }
  }

  // Pre-render the bar gradient
  preRenderBar() {
    /**
     * The order of the colours is commented in the file: the fist two colours
     * define the background and dots (check it to see what are the dots), the
     * next 16 colours are the analyzer's colours from top to bottom, the next
     * 5 colours are the oscilloscope's ones, from center to top/bottom, the
     * last colour is for the analyzer's peak markers.
     */

    // Off-screen canvas for pre-rendering a single bar gradient
    this.barCanvas = document.createElement("canvas");
    this.barCanvas.width = BAR_WIDTH;
    this.barCanvas.height = this._height();

    const offset = 2; // The first two colors are for the background;
    const gradientColors = this.props.colors.slice(offset, offset + GRADIENT_COLOR_COUNT);

    const barCanvasCtx = this.barCanvas.getContext("2d");
    const height = this._renderHeight();
    const multiplier = GRADIENT_COLOR_COUNT / height;
    // In shade mode, the five colors are, from top to bottom:
    // 214, 102, 0 -- 3
    // 222, 165, 24 -- 6
    // 148, 222, 33 -- 9
    // 57, 181, 16 -- 12
    // 24, 132, 8 -- 15
    // TODO: This could probably be improved by iterating backwards
    for (let i = 0; i < height; i++) {
      const colorIndex = GRADIENT_COLOR_COUNT - 1 - Math.floor(i * multiplier);
      barCanvasCtx.fillStyle = gradientColors[colorIndex];
      const y = this._height() - i * PIXEL_DENSITY;
      barCanvasCtx.fillRect(0, y, BAR_WIDTH, PIXEL_DENSITY);
    }
  }

  paintFrame() {
    this.clear();
    if (this.props.style === OSCILLOSCOPE) {
      this._paintOscilloscopeFrame();
    } else if (this.props.style === BAR) {
      this._paintBarFrame();
    }
  }

  _paintOscilloscopeFrame() {
    this.props.analyser.getByteTimeDomainData(this.dataArray);

    this.canvasCtx.lineWidth = PIXEL_DENSITY;

    // Just use one of the viscolors for now
    this.canvasCtx.strokeStyle = this.props.colors[18];

    // Since dataArray has more values than we have pixels to display, we
    // have to average several dataArray values per pixel. We call these
    // groups slices.
    //
    // We use the  2x scale here since we only want to plot values for
    // "real" pixels.
    const sliceWidth = Math.floor(this.bufferLength / this._width()) * PIXEL_DENSITY;

    // The max amplitude is half the height
    const h = this._height() / 2;

    this.canvasCtx.beginPath();

    // Iterate over the width of the canvas in "real" pixels.
    for (let j = 0; j <= this._renderWidth(); j++) {
      const amplitude = sliceAverage(this.dataArray, sliceWidth, j);
      const percentAmplitude = amplitude / 128; // dataArray gives us bytes
      const y = percentAmplitude * h;
      const x = j * PIXEL_DENSITY;

      // Canvas coordinates are in the middle of the pixel by default.
      // When we want to draw pixel perfect lines, we will need to
      // account for that here
      if (x === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }
    }
    this.canvasCtx.stroke();
  }

  _printBar(x, height) {
    height = Math.ceil(height) * PIXEL_DENSITY;
    if (height > 0) {
      const y = this._height() - height;
      const ctx = this.canvasCtx;
      // Draw the gradient
      const b = BAR_WIDTH;
      ctx.drawImage(this.barCanvas, 0, y, b, height, x, y, b, height);

      // Draw the gray peak line
      // TODO: Rather than sitting on top of the bar, these
      // are expected to be behind the top pixel, and fall more slowly.
      // Currently these overwrite the top pixel.
      ctx.fillStyle = this.props.colors[PEAK_COLOR_INDEX];
      ctx.fillRect(x, y, BAR_WIDTH, PIXEL_DENSITY);
    }
  }

  _paintBarFrame() {
    this.props.analyser.getByteFrequencyData(this.dataArray);
    // We are printing bars off the right of the canvas :(
    const xOffset = BAR_WIDTH + PIXEL_DENSITY; // Bar width, plus a pixel of spacing to the right.
    const heightMultiplier = this._renderHeight() / 256;
    for (let j = 0; j < this.bufferLength; j++) {
      this._printBar(j * xOffset, this.dataArray[j] * heightMultiplier);
    }
  }

  render() {
    var _props = this.props;
    const width = _props.width,
          height = _props.height;

    return _react2.default.createElement("canvas", {
      id: "visualizer",
      ref: node => this.canvas = node,
      style: { width, height },
      width: width * PIXEL_DENSITY,
      height: height * PIXEL_DENSITY,
      onClick: this.props.toggleVisualizerStyle
    });
  }
}

const mapStateToProps = state => ({
  colors: state.display.skinColors,
  style: state.display.visualizerStyle,
  width: state.display.mainShade ? 38 : 76,
  height: state.display.mainShade ? 5 : 16,
  status: state.media.status,
  spekles: !state.display.mainShade
});

const mapDispatchToProps = {
  toggleVisualizerStyle: _actionCreators.toggleVisualizerStyle
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Visualizer);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Volume = __webpack_require__(119);

var _Volume2 = _interopRequireDefault(_Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainVolume = props => {
  const volume = props.volume;

  const percent = volume / 100;
  const sprite = Math.round(percent * 28);
  const offset = (sprite - 1) * 15;

  const style = {
    backgroundPosition: `0 -${offset}px`
  };
  return _react2.default.createElement(
    "div",
    { id: "volume", style: style },
    _react2.default.createElement(_Volume2.default, null)
  );
};

const mapStateToProps = state => ({
  volume: state.media.volume
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MainVolume);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #main-window {\n    position: absolute;\n    height: 116px;\n    width: 275px;\n    /* Ask the browser to scale showing large pixels if possible */\n    image-rendering: -moz-crisp-edges; /* Firefox */\n    image-rendering: -o-crisp-edges; /* Opera */\n    image-rendering: -webkit-optimize-contrast; /* Safari */\n    image-rendering: pixelated; /* Only in Chrome > 40 */\n    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp #title-bar {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 14px;\n    width: 275px;\n}\n\n#webamp #option-context,\n#webamp #minimize,\n#webamp #shade,\n#webamp #close {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #title-bar #option {\n    width: 100%;\n    height: 100%;\n}\n\n#webamp #title-bar #option-context {\n    left: 6px;\n}\n#webamp #title-bar #minimize {\n    left: 244px;\n}\n#webamp #title-bar #shade {\n    left: 254px;\n}\n#webamp #title-bar #close {\n    left: 264px;\n}\n#webamp #clutter-bar {\n    position: absolute;\n    top: 22px;\n    left: 10px;\n    height: 43px;\n    width: 8px;\n}\n\n#webamp #clutter-bar div {\n    position: absolute;\n    height: 7px;\n    width: 8px;\n    left: 0px;\n}\n\n#webamp #clutter-bar #button-o {\n    top: 3px;\n    height: 8px;\n}\n#webamp #clutter-bar #button-a {\n    top: 11px;\n}\n#webamp #clutter-bar #button-i {\n    top: 18px;\n}\n#webamp #clutter-bar #button-d {\n    top: 25px;\n    height: 8px;\n}\n#webamp #clutter-bar #button-v {\n    top: 33px;\n}\n\n#webamp #play-pause {\n    position: absolute;\n    top: 28px;\n    left: 26px;\n    height: 9px;\n    width: 9px;\n    background-repeat: no-repeat;\n}\n\n#webamp .play #work-indicator,\n#webamp #work-indicator.selected {\n    position: absolute;\n    top: 28px;\n    left: 24px;\n    height: 9px;\n    width: 3px;\n}\n#webamp .status #time {\n    position: absolute;\n    left: 39px;\n    top: 26px;\n    /* Just to make it clickable */\n    height: 13px;\n    width: 59px;\n}\n\n#webamp .stop .status #time {\n    display: none;\n}\n#webamp .pause .status #time {\n    animation: blink 2s step-start 1s infinite;\n    -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .status #time #minus-sign {\n    /* Note that this get's augmented by the skin CSS if NUM_EX.BMP is present */\n    position: absolute;\n    top: 6px;\n    left: -1px;\n    width: 5px;\n    height: 1px;\n}\n\n#webamp .status #time #minute-first-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 9px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #minute-second-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 21px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #second-first-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 39px;\n    height: 13px;\n    width: 9px;\n}\n#webamp .status #time #second-second-digit {\n    position: absolute;\n    pointer-events: none;\n    left: 51px;\n    height: 13px;\n    width: 9px;\n}\n\n#webamp #visualizer {\n    position: absolute;\n    top: 43px;\n    left: 24px;\n}\n\n#webamp .shade #visualizer {\n    top: 5px;\n    left: 79px;\n}\n\n#webamp .stop #visualizer {\n    display: none;\n}\n\n#webamp .text {\n    display: none;\n}\n\n#webamp #marquee {\n    position: absolute;\n    left: 111px;\n    top: 24px;\n    width: 155px;\n    height: 6px;\n    overflow: hidden;\n    display: block;\n    padding: 3px 0px; /* Ensure the target is correct for the cursor */\n}\n\n#webamp .media-info #kbps {\n    position: absolute;\n    left: 111px;\n    top: 43px;\n    width: 15px;\n    height: 6px;\n    overflow: hidden;\n}\n\n#webamp .stop .media-info #kbps {\n    display: none;\n}\n\n#webamp .media-info #khz {\n    position: absolute;\n    left: 156px;\n    top: 43px;\n    width: 10px;\n    height: 6px;\n    overflow: hidden;\n}\n\n#webamp .stop .media-info #khz {\n    display: none;\n}\n\n#webamp .media-info .mono-stereo {\n    position: absolute;\n    left: 212px;\n    top: 41px;\n    width: 57px;\n    height: 12px;\n}\n\n#webamp .media-info .mono-stereo div {\n    position: absolute;\n    height: 12px;\n}\n\n#webamp .media-info .mono-stereo #mono {\n    width: 27px;\n}\n\n#webamp .media-info .mono-stereo #stereo {\n    left: 27px;\n    width: 29px;\n}\n\n#webamp #volume {\n    position: absolute;\n    left: 107px;\n    top: 57px;\n    height: 13px;\n    width: 68px;\n    background-position: 0 0;\n}\n\n#webamp #volume input {\n    height: 13px;\n    /* The input itself, is actually 3px shorter than the background\n     * https://twitter.com/LuigiHann/status/959275940688867328\n     */\n    width: 65px;\n    display: block;\n}\n#webamp #volume input::-webkit-slider-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n#webamp #volume input::-moz-range-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n\n#webamp #balance {\n    position: absolute;\n    left: 177px;\n    top: 57px;\n    height: 13px;\n    width: 38px;\n    background-position: 0 0;\n}\n\n#webamp #balance::-webkit-slider-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n#webamp #balance::-moz-range-thumb {\n    top: 1px;\n    height: 11px;\n    width: 14px;\n}\n\n#webamp .windows {\n    position: absolute;\n    left: 219px;\n    top: 58px;\n    width: 46px;\n    height: 12px;\n}\n\n#webamp .windows div {\n    position: absolute;\n    width: 23px;\n    height: 12px;\n}\n\n#webamp .windows #equalizer-button {\n    left: 0;\n}\n\n#webamp .windows #playlist-button {\n    left: 23px;\n}\n\n#webamp #position {\n    position: absolute;\n    left: 16px;\n    top: 72px;\n    width: 248px;\n    height: 10px;\n}\n\n#webamp #position::-webkit-slider-thumb {\n    height: 10px;\n    width: 29px;\n    /*\n     * Fix the strange bug in Safair/mobile-chrome\n     * http://stackoverflow.com/questions/26727769/rendering-glitch-when-manipulating-range-input-value-via-javascript-in-webkit\n     */\n    -webkit-box-sizing: border-box;\n    position: relative;\n}\n\n#webamp #position::-moz-range-thumb {\n    height: 10px;\n    width: 29px;\n}\n\n/* For some reason, we can't use display: none here */\n#webamp .stop #position::-webkit-slider-thumb {\n    visibility: hidden;\n}\n#webamp .stop #position::-moz-range-thumb {\n    visibility: hidden;\n}\n\n/* For some reason this is needed for the position slider to show up now that\n * we are using React.\n */\n#webamp .play #position::-webkit-slider-thumb {\n    visibility: visible;\n}\n\n#webamp .actions div {\n    height: 18px;\n    width: 23px;\n    position: absolute;\n}\n\n#webamp .actions #previous {\n    top: 88px;\n    left: 16px;\n}\n#webamp .actions #play {\n    top: 88px;\n    left: 39px;\n}\n#webamp .actions #pause {\n    top: 88px;\n    left: 62px;\n}\n#webamp .actions #stop {\n    top: 88px;\n    left: 85px;\n}\n#webamp .actions #next {\n    top: 88px;\n    left: 108px;\n    width: 22px;\n}\n\n#webamp #eject {\n    position: absolute;\n    top: 89px;\n    left: 136px;\n    height: 16px;\n    width: 22px;\n}\n\n#webamp .shuffle-repeat {\n    position: absolute;\n    top: 89px;\n    left: 164px;\n    width: 74px;\n}\n\n#webamp .shuffle-repeat div {\n    position: absolute;\n    height: 15px;\n}\n\n#webamp .shuffle-repeat #shuffle {\n    width: 47px;\n}\n\n#webamp .shuffle-repeat #repeat {\n    left: 46px;\n    width: 28px;\n}\n\n#webamp #about {\n    position: absolute;\n    top: 91px;\n    left: 253px;\n    height: 15px;\n    width: 13px;\n}\n\n#webamp .digit {\n    position: absolute;\n    display: inline-block;\n    width: 9px;\n    height: 13px;\n    background-repeat: no-repeat;\n    text-indent: -9999px;\n}\n\n/* Shade View */\n#webamp #main-window.shade {\n    height: 14px;\n}\n\n#webamp .shade .media-info,\n#webamp .shade .windows,\n#webamp .shade #volume,\n#webamp .shade #balance,\n#webamp .shade .shuffle-repeat,\n#webamp .shade .status {\n    display: none;\n}\n#webamp .shade #title-bar {\n}\n\n#webamp .shade .actions div {\n    position: absolute;\n}\n#webamp .shade .actions #previous,\n#webamp .shade .actions #previous:active {\n    background: none;\n    height: 10px;\n    width: 7px;\n    top: 2px;\n    left: 169px;\n}\n#webamp .shade .actions #play,\n#webamp .shade .actions #play:active {\n    background: none;\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 176px;\n}\n#webamp .shade .actions #pause,\n#webamp .shade .actions #pause:active {\n    background: none;\n    height: 10px;\n    width: 9px;\n    top: 2px;\n    left: 186px;\n}\n#webamp .shade .actions #stop,\n#webamp .shade .actions #stop:active {\n    background: none;\n    height: 10px;\n    width: 9px;\n    top: 2px;\n    left: 195px;\n}\n#webamp .shade .actions #next,\n#webamp .shade .actions #next:active {\n    background: none;\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 204px;\n}\n#webamp .shade #eject,\n#webamp .shade #eject:active {\n    height: 10px;\n    width: 10px;\n    top: 2px;\n    left: 215px;\n    background: none;\n}\n\n#webamp .shade #position {\n    position: absolute;\n    left: 226px;\n    top: 4px;\n    width: 17px;\n    height: 7px;\n}\n\n#webamp .shade #position::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n    /* This make it appear. Not sure why */\n    background: none;\n}\n\n#webamp .shade #position::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n    /* This make it appear. Not sure why */\n    background: none;\n}\n\n#webamp #main-window .mini-time {\n    position: absolute;\n    top: 4px;\n    left: 127px;\n}\n", ""]);

// exports


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(5);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

var _utils = __webpack_require__(9);

var _DropTarget = __webpack_require__(115);

var _DropTarget2 = _interopRequireDefault(_DropTarget);

var _PlaylistShade = __webpack_require__(269);

var _PlaylistShade2 = _interopRequireDefault(_PlaylistShade);

var _AddMenu = __webpack_require__(270);

var _AddMenu2 = _interopRequireDefault(_AddMenu);

var _RemoveMenu = __webpack_require__(271);

var _RemoveMenu2 = _interopRequireDefault(_RemoveMenu);

var _SelectionMenu = __webpack_require__(272);

var _SelectionMenu2 = _interopRequireDefault(_SelectionMenu);

var _MiscMenu = __webpack_require__(273);

var _MiscMenu2 = _interopRequireDefault(_MiscMenu);

var _ListMenu = __webpack_require__(274);

var _ListMenu2 = _interopRequireDefault(_ListMenu);

var _PlaylistResizeTarget = __webpack_require__(120);

var _PlaylistResizeTarget2 = _interopRequireDefault(_PlaylistResizeTarget);

var _PlaylistActionArea = __webpack_require__(275);

var _PlaylistActionArea2 = _interopRequireDefault(_PlaylistActionArea);

var _TrackList = __webpack_require__(277);

var _TrackList2 = _interopRequireDefault(_TrackList);

var _ScrollBar = __webpack_require__(280);

var _ScrollBar2 = _interopRequireDefault(_ScrollBar);

__webpack_require__(307);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlaylistWindow extends _react2.default.Component {
  constructor(props) {
    super(props);
    this._handleDrop = this._handleDrop.bind(this);
  }

  _handleDrop(e, targetCoords) {
    const top = e.clientY - targetCoords.y;
    const atIndex = (0, _utils.clamp)(this.props.offset + Math.round((top - 23) / _constants.TRACK_HEIGHT), 0, this.props.maxTrackIndex + 1);
    this.props.loadFilesFromReferences(e, atIndex);
  }

  render() {
    var _props = this.props;
    const skinPlaylistStyle = _props.skinPlaylistStyle,
          focusPlaylist = _props.focusPlaylist,
          focused = _props.focused,
          playlistSize = _props.playlistSize,
          playlistWindowPixelSize = _props.playlistWindowPixelSize,
          playlistShade = _props.playlistShade,
          close = _props.close,
          toggleShade = _props.toggleShade;

    if (playlistShade) {
      return _react2.default.createElement(_PlaylistShade2.default, null);
    }

    const style = {
      color: skinPlaylistStyle.normal,
      backgroundColor: skinPlaylistStyle.normalbg,
      fontFamily: `${skinPlaylistStyle.font}, Arial, sans-serif`,
      height: `${playlistWindowPixelSize.height}px`,
      width: `${playlistWindowPixelSize.width}px`
    };

    const classes = (0, _classnames2.default)("window", "draggable", {
      selected: focused === _constants.WINDOWS.PLAYLIST,
      wide: playlistSize[0] > 2
    });

    const showSpacers = playlistSize[0] % 2 === 0;

    return _react2.default.createElement(
      _DropTarget2.default,
      {
        id: "playlist-window",
        className: classes,
        style: style,
        onMouseDown: focusPlaylist,
        handleDrop: this._handleDrop,
        onWheel: this.props.scrollVolume
      },
      _react2.default.createElement(
        "div",
        { className: "playlist-top draggable", onDoubleClick: toggleShade },
        _react2.default.createElement("div", { className: "playlist-top-left draggable" }),
        showSpacers && _react2.default.createElement("div", { className: "playlist-top-left-spacer draggable" }),
        _react2.default.createElement("div", { className: "playlist-top-left-fill draggable" }),
        _react2.default.createElement("div", { className: "playlist-top-title draggable" }),
        showSpacers && _react2.default.createElement("div", { className: "playlist-top-right-spacer draggable" }),
        _react2.default.createElement("div", { className: "playlist-top-right-fill draggable" }),
        _react2.default.createElement(
          "div",
          { className: "playlist-top-right draggable" },
          _react2.default.createElement("div", { id: "playlist-shade-button", onClick: toggleShade }),
          _react2.default.createElement("div", { id: "playlist-close-button", onClick: close })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "playlist-middle draggable" },
        _react2.default.createElement("div", { className: "playlist-middle-left draggable" }),
        _react2.default.createElement(
          "div",
          { className: "playlist-middle-center" },
          _react2.default.createElement(_TrackList2.default, null)
        ),
        _react2.default.createElement(
          "div",
          { className: "playlist-middle-right draggable" },
          _react2.default.createElement(_ScrollBar2.default, null)
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "playlist-bottom draggable" },
        _react2.default.createElement(
          "div",
          { className: "playlist-bottom-left draggable" },
          _react2.default.createElement(_AddMenu2.default, null),
          _react2.default.createElement(_RemoveMenu2.default, null),
          _react2.default.createElement(_SelectionMenu2.default, null),
          _react2.default.createElement(_MiscMenu2.default, null)
        ),
        _react2.default.createElement("div", { className: "playlist-bottom-center draggable" }),
        _react2.default.createElement(
          "div",
          { className: "playlist-bottom-right draggable" },
          _react2.default.createElement("div", {
            className: "playlist-visualizer",
            onClick: this.props.toggleVisualizerStyle
          }),
          _react2.default.createElement(_PlaylistActionArea2.default, null),
          _react2.default.createElement(_ListMenu2.default, null),
          _react2.default.createElement("div", {
            id: "playlist-scroll-up-button",
            onClick: this.props.scrollUpFourTracks
          }),
          _react2.default.createElement("div", {
            id: "playlist-scroll-down-button",
            onClick: this.props.scrollDownFourTracks
          }),
          _react2.default.createElement(_PlaylistResizeTarget2.default, null)
        )
      )
    );
  }
}

const mapDispatchToProps = {
  focusPlaylist: () => ({
    type: _actionTypes.SET_FOCUSED_WINDOW,
    window: _constants.WINDOWS.PLAYLIST
  }),
  close: () => (0, _actionCreators.closeWindow)("playlist"),
  toggleShade: _actionCreators.togglePlaylistShadeMode,
  toggleVisualizerStyle: _actionCreators.toggleVisualizerStyle,
  scrollUpFourTracks: _actionCreators.scrollUpFourTracks,
  scrollDownFourTracks: _actionCreators.scrollDownFourTracks,
  loadFilesFromReferences: (e, startIndex) => (0, _actionCreators.loadFilesFromReferences)(e.dataTransfer.files, null, startIndex),
  scrollVolume: _actionCreators.scrollVolume
};

const mapStateToProps = state => {
  const focused = state.windows.focused,
        duration = state.media.duration,
        trackOrder = state.playlist.trackOrder;


  return {
    offset: (0, _selectors.getScrollOffset)(state),
    maxTrackIndex: trackOrder.length - 1,
    playlistWindowPixelSize: (0, _selectors.getWindowPixelSize)(state, "playlist"),
    focused,
    skinPlaylistStyle: (0, _selectors.getSkinPlaylistStyle)(state),
    playlistSize: (0, _selectors.getWindowSize)(state, "playlist"),
    playlistShade: (0, _selectors.getWindowShade)(state, "playlist"),
    duration
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlaylistWindow);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(7);

var _utils = __webpack_require__(9);

var _actionTypes = __webpack_require__(3);

var _constants = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _CharacterString = __webpack_require__(41);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

var _PlaylistResizeTarget = __webpack_require__(120);

var _PlaylistResizeTarget2 = _interopRequireDefault(_PlaylistResizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PlaylistShade extends _react2.default.Component {
  _addedWidth() {
    return this.props.playlistSize[0] * _constants.WINDOW_RESIZE_SEGMENT_WIDTH;
  }
  _trimmedName() {
    const name = this.props.name;

    if (name == null) {
      return "[No file]";
    }

    const MIN_NAME_WIDTH = 205;

    const nameLength = (MIN_NAME_WIDTH + this._addedWidth()) / _constants.CHARACTER_WIDTH;
    return name.length > nameLength ? name.slice(0, nameLength - 1) + _constants.UTF8_ELLIPSIS : name;
  }

  _time() {
    var _props = this.props;
    const length = _props.length,
          name = _props.name;

    return name == null ? "" : (0, _utils.getTimeStr)(length);
  }

  render() {
    var _props2 = this.props;
    const toggleShade = _props2.toggleShade,
          close = _props2.close,
          focusPlaylist = _props2.focusPlaylist,
          focused = _props2.focused;


    const style = {
      width: `${_constants.WINDOW_WIDTH + this._addedWidth()}px`
    };

    const classes = (0, _classnames2.default)("window", "draggable", {
      selected: focused === _constants.WINDOWS.PLAYLIST
    });

    return _react2.default.createElement(
      "div",
      {
        id: "playlist-window-shade",
        className: classes,
        style: { width: style.width },
        onMouseDown: focusPlaylist,
        onDoubleClick: toggleShade
      },
      _react2.default.createElement(
        "div",
        { className: "left" },
        _react2.default.createElement(
          "div",
          { className: "right draggable" },
          _react2.default.createElement(
            _CharacterString2.default,
            { id: "playlist-shade-track-title" },
            this._trimmedName()
          ),
          _react2.default.createElement(
            _CharacterString2.default,
            { id: "playlist-shade-time" },
            this._time()
          ),
          _react2.default.createElement(_PlaylistResizeTarget2.default, { widthOnly: true }),
          _react2.default.createElement("div", { id: "playlist-shade-button", onClick: toggleShade }),
          _react2.default.createElement("div", { id: "playlist-close-button", onClick: close })
        )
      )
    );
  }
}

const mapDispatchToProps = dispatch => ({
  focusPlaylist: () => dispatch({ type: _actionTypes.SET_FOCUSED_WINDOW, window: _constants.WINDOWS.PLAYLIST }),
  close: () => (0, _actionCreators.closeWindow)("playlist"),
  toggleShade: () => dispatch((0, _actionCreators.togglePlaylistShadeMode)())
});

const mapStateToProps = state => {
  const focused = state.windows.focused,
        length = state.media.length;

  return {
    focused,
    playlistSize: (0, _selectors.getWindowSize)(state, "playlist"),
    trackOrder: (0, _selectors.getOrderedTracks)(state),
    length,
    name: (0, _selectors.getMinimalMediaText)(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlaylistShade);

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _selectors = __webpack_require__(7);

var _actionCreators = __webpack_require__(2);

var _fileUtils = __webpack_require__(73);

var _PlaylistMenu = __webpack_require__(42);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const el = document.createElement("input");
el.type = "file";
const DIR_SUPPORT = typeof el.webkitdirectory !== "undefined" || typeof el.mozdirectory !== "undefined" || typeof el.directory !== "undefined";

/* eslint-disable no-alert */

const AddMenu = ({ nextIndex, addFilesAtIndex, addDirAtIndex }) => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-add-menu" },
  _react2.default.createElement("div", { className: "add-url", onClick: () => alert("Not supported in Webamp") }),
  _react2.default.createElement("div", { className: "add-dir", onClick: () => addDirAtIndex(nextIndex) }),
  _react2.default.createElement("div", { className: "add-file", onClick: () => addFilesAtIndex(nextIndex) })
);

const mapStateToProps = state => ({
  nextIndex: (0, _selectors.getTrackCount)(state)
});

const mapDispatchToProps = dispatch => ({
  addFilesAtIndex: async nextIndex => {
    const fileReferences = await (0, _fileUtils.promptForFileReferences)();
    dispatch((0, _actionCreators.addTracksFromReferences)(fileReferences, null, nextIndex));
  },
  addDirAtIndex: async nextIndex => {
    if (!DIR_SUPPORT) {
      alert("Not supported in your browser");
      return;
    }
    const fileReferences = await (0, _fileUtils.promptForFileReferences)({ directory: true });
    dispatch((0, _actionCreators.addTracksFromReferences)(fileReferences, null, nextIndex));
  }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddMenu);

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _PlaylistMenu = __webpack_require__(42);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */

const RemoveMenu = props => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-remove-menu" },
  _react2.default.createElement("div", {
    className: "remove-misc",
    onClick: () => alert("Not supported in Webamp")
  }),
  _react2.default.createElement("div", { className: "remove-all", onClick: props.removeAll }),
  _react2.default.createElement("div", { className: "crop", onClick: props.crop }),
  _react2.default.createElement("div", { className: "remove-selected", onClick: props.removeSelected })
);

const mapDispatchToProps = {
  removeSelected: _actionCreators.removeSelectedTracks,
  removeAll: _actionCreators.removeAllTracks,
  crop: _actionCreators.cropPlaylist
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(RemoveMenu);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionTypes = __webpack_require__(3);

var _PlaylistMenu = __webpack_require__(42);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectionMenu = props => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-selection-menu" },
  _react2.default.createElement("div", { className: "invert-selection", onClick: props.invertSelection }),
  _react2.default.createElement("div", { className: "select-zero", onClick: props.selectZero }),
  _react2.default.createElement("div", { className: "select-all", onClick: props.selectAll })
);

const mapDispatchToProps = {
  invertSelection: () => ({ type: _actionTypes.INVERT_SELECTION }),
  selectAll: () => ({ type: _actionTypes.SELECT_ALL }),
  selectZero: () => ({ type: _actionTypes.SELECT_ZERO })
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SelectionMenu);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(20);

var _ContextMenuTarget = __webpack_require__(75);

var _ContextMenuTarget2 = _interopRequireDefault(_ContextMenuTarget);

var _PlaylistMenu = __webpack_require__(42);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */
/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */
const SortContextMenu = props => _react2.default.createElement(
  _ContextMenuTarget2.default,
  {
    style: { width: "100%", height: "100%" },
    top: true,
    handle: _react2.default.createElement("div", null)
  },
  _react2.default.createElement(_ContextMenu.Node, { label: "Sort list by title", onClick: props.sortListByTitle }),
  _react2.default.createElement(_ContextMenu.Hr, null),
  _react2.default.createElement(_ContextMenu.Node, { label: "Reverse list", onClick: props.reverseList }),
  _react2.default.createElement(_ContextMenu.Node, { label: "Randomize list", onClick: props.randomizeList })
);

const ConnectedSortContextMenu = (0, _reactRedux.connect)(null, {
  reverseList: _actionCreators.reverseList,
  randomizeList: _actionCreators.randomizeList,
  sortListByTitle: _actionCreators.sortListByTitle
})(SortContextMenu);

const MiscOptionsContextMenu = props => _react2.default.createElement(
  _ContextMenuTarget2.default,
  {
    style: { width: "100%", height: "100%" },
    top: true,
    handle: _react2.default.createElement("div", null)
  },
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.downloadHtmlPlaylist, label: "Generate HTML playlist" })
);

const ConnectedMiscOptionsContextMenu = (0, _reactRedux.connect)(null, { downloadHtmlPlaylist: _actionCreators.downloadHtmlPlaylist })(MiscOptionsContextMenu);

const MiscMenu = () => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-misc-menu" },
  _react2.default.createElement(
    "div",
    { className: "sort-list", onClick: e => e.stopPropagation() },
    _react2.default.createElement(ConnectedSortContextMenu, null)
  ),
  _react2.default.createElement("div", {
    className: "file-info",
    onClick: () => alert("Not supported in Webamp")
  }),
  _react2.default.createElement(
    "div",
    { className: "misc-options", onClick: e => e.stopPropagation() },
    _react2.default.createElement(ConnectedMiscOptionsContextMenu, null)
  )
);

exports.default = MiscMenu;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _PlaylistMenu = __webpack_require__(42);

var _PlaylistMenu2 = _interopRequireDefault(_PlaylistMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-alert */

const ListMenu = props => _react2.default.createElement(
  _PlaylistMenu2.default,
  { id: "playlist-list-menu" },
  _react2.default.createElement("div", { className: "new-list", onClick: props.removeAllTracks }),
  _react2.default.createElement("div", {
    className: "save-list",
    onClick: () => alert("Not supported in Webamp")
  }),
  _react2.default.createElement("div", {
    className: "load-list",
    onClick: () => alert("Not supported in Webamp")
  })
);

const mapDispatchToProps = {
  removeAllTracks: _actionCreators.removeAllTracks
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ListMenu);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _MiniTime = __webpack_require__(116);

var _MiniTime2 = _interopRequireDefault(_MiniTime);

var _RunningTimeDisplay = __webpack_require__(276);

var _RunningTimeDisplay2 = _interopRequireDefault(_RunningTimeDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlaylistWindow = props => _react2.default.createElement(
  _react2.default.Fragment,
  null,
  _react2.default.createElement(_RunningTimeDisplay2.default, null),
  _react2.default.createElement(
    "div",
    { className: "playlist-action-buttons" },
    _react2.default.createElement("div", { className: "playlist-previous-button", onClick: props.previous }),
    _react2.default.createElement("div", { className: "playlist-play-button", onClick: props.play }),
    _react2.default.createElement("div", { className: "playlist-pause-button", onClick: props.pause }),
    _react2.default.createElement("div", { className: "playlist-stop-button", onClick: props.stop }),
    _react2.default.createElement("div", { className: "playlist-next-button", onClick: props.next }),
    _react2.default.createElement("div", {
      className: "playlist-eject-button",
      onClick: props.openMediaFileDialog
    })
  ),
  _react2.default.createElement(_MiniTime2.default, null)
);

const mapDispatchToProps = {
  play: _actionCreators.play,
  pause: _actionCreators.pause,
  stop: _actionCreators.stop,
  openMediaFileDialog: _actionCreators.openMediaFileDialog,
  next: _actionCreators.next,
  previous: _actionCreators.previous
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PlaylistWindow);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _CharacterString = __webpack_require__(41);

var _CharacterString2 = _interopRequireDefault(_CharacterString);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// While all the browsers I care about support String.prototype.padEnd,
// Not all node versions do, and I want tests to pass in Jest...
// Sigh.
function rightPad(str, len, fillChar) {
  while (str.length < len) {
    str += fillChar;
  }
  return str;
}

const RunningTimeDisplay = props => _react2.default.createElement(
  "div",
  { className: "playlist-running-time-display draggable" },
  _react2.default.createElement(
    _CharacterString2.default,
    null,
    rightPad(props.runningTimeMessage, 18, " ")
  )
);

const mapStateToProps = state => ({
  runningTimeMessage: (0, _selectors.getRunningTimeMessage)(state)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RunningTimeDisplay);

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _utils = __webpack_require__(9);

var _selectors = __webpack_require__(7);

var _constants = __webpack_require__(5);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _TrackCell = __webpack_require__(278);

var _TrackCell2 = _interopRequireDefault(_TrackCell);

var _TrackTitle = __webpack_require__(279);

var _TrackTitle2 = _interopRequireDefault(_TrackTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNumberLength(number) {
  return number.toString().length;
}

class TrackList extends _react2.default.Component {
  constructor(props) {
    super(props);
    this._handleMoveClick = this._handleMoveClick.bind(this);
  }

  _renderTracks(format) {
    return this.props.trackIds.map((id, i) => _react2.default.createElement(
      _TrackCell2.default,
      {
        key: id,
        id: id,
        index: this.props.offset + i,
        handleMoveClick: this._handleMoveClick
      },
      format(id, i)
    ));
  }

  _handleMoveClick(e) {
    if (!this._node) {
      return;
    }

    var _node$getBoundingClie = this._node.getBoundingClientRect();

    const top = _node$getBoundingClie.top,
          bottom = _node$getBoundingClie.bottom,
          left = _node$getBoundingClie.left,
          right = _node$getBoundingClie.right;

    const mouseStart = e.clientY;
    let lastDiff = 0;
    const handleMouseMove = ee => {
      const y = ee.clientY,
            x = ee.clientX;

      if (y < top || y > bottom || x < left || x > right) {
        // Mouse is outside the track list
        return;
      }
      const proposedDiff = Math.floor((y - mouseStart) / _constants.TRACK_HEIGHT);
      if (proposedDiff !== lastDiff) {
        const diffDiff = proposedDiff - lastDiff;
        this.props.dragSelected(diffDiff);
        lastDiff = proposedDiff;
      }
    };

    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", handleMouseMove);
    });
    window.addEventListener("mousemove", handleMouseMove);
  }

  render() {
    var _props = this.props;
    const tracks = _props.tracks,
          offset = _props.offset;

    const maxTrackNumberLength = getNumberLength(this.props.numberOfTracks);
    const paddedTrackNumForIndex = i => (i + 1 + offset).toString().padStart(maxTrackNumberLength, "\u00A0");
    return _react2.default.createElement(
      "div",
      {
        ref: node => {
          this._node = node;
        },
        className: "playlist-tracks",
        style: { height: "100%" },
        onClick: this.props.selectZero,
        onWheel: this.props.scrollPlaylistByDelta
      },
      _react2.default.createElement(
        "div",
        { className: "playlist-track-titles" },
        this._renderTracks((id, i) => _react2.default.createElement(_TrackTitle2.default, { id: id, paddedTrackNumber: paddedTrackNumForIndex(i) }))
      ),
      _react2.default.createElement(
        "div",
        { className: "playlist-track-durations" },
        this._renderTracks(id => (0, _utils.getTimeStr)(tracks[id].duration))
      )
    );
  }
}

const mapDispatchToProps = {
  selectZero: () => ({ type: _actionTypes.SELECT_ZERO }),
  dragSelected: _actionCreators.dragSelected,
  scrollPlaylistByDelta: _actionCreators.scrollPlaylistByDelta
};

const mapStateToProps = state => ({
  offset: (0, _selectors.getScrollOffset)(state),
  trackIds: (0, _selectors.getVisibleTrackIds)(state),
  tracks: state.playlist.tracks,
  numberOfTracks: (0, _selectors.getNumberOfTracks)(state)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TrackList);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionTypes = __webpack_require__(3);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TrackCell extends _react2.default.Component {
  constructor(props) {
    super(props);
    this._onMouseDown = this._onMouseDown.bind(this);
  }

  _onMouseDown(e) {
    if (e.shiftKey) {
      this.props.shiftClick(e);
      return;
    } else if (e.metaKey || e.ctrlKey) {
      this.props.ctrlClick(e);
      return;
    }

    if (!this.props.selected) {
      this.props.click(e);
    }

    this.props.handleMoveClick(e);
  }

  render() {
    var _props = this.props;
    const skinPlaylistStyle = _props.skinPlaylistStyle,
          selected = _props.selected,
          current = _props.current,
          children = _props.children,
          onDoubleClick = _props.onDoubleClick;

    const style = {
      backgroundColor: selected ? skinPlaylistStyle.selectedbg : null,
      color: current ? skinPlaylistStyle.current : null
    };
    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)("track-cell", { selected, current }),
        style: style,
        onClick: e => e.stopPropagation(),
        onMouseDown: this._onMouseDown,
        onContextMenu: e => e.preventDefault(),
        onDoubleClick: onDoubleClick
      },
      children
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const tracks = state.playlist.tracks;

  const current = (0, _selectors.getCurrentTrackId)(state) === ownProps.id;
  const track = tracks[ownProps.id];
  return {
    skinPlaylistStyle: (0, _selectors.getSkinPlaylistStyle)(state),
    selected: track.selected,
    current
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  shiftClick: e => {
    e.preventDefault();
    return dispatch({ type: _actionTypes.SHIFT_CLICKED_TRACK, index: ownProps.index });
  },
  ctrlClick: e => {
    e.preventDefault();
    return dispatch({ type: _actionTypes.CTRL_CLICKED_TRACK, index: ownProps.index });
  },
  click: () => dispatch({ type: _actionTypes.CLICKED_TRACK, index: ownProps.index }),
  onDoubleClick: () => dispatch({ type: _actionTypes.PLAY_TRACK, id: ownProps.id })
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TrackCell);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TrackTitle = props => _react2.default.createElement(
  "span",
  null,
  props.paddedTrackNumber,
  ". ",
  props.title
);

const mapStateToProps = (state, ownProps) => ({
  title: (0, _selectors.getTrackDisplayName)(state, ownProps.id)
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TrackTitle);

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Slider = __webpack_require__(122);

var _Slider2 = _interopRequireDefault(_Slider);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Handle = () => _react2.default.createElement("div", { className: "playlist-scrollbar-handle" });

const ScrollBar = props => _react2.default.createElement(_Slider2.default, {
  className: "playlist-scrollbar",
  type: "range",
  min: 0,
  max: 100,
  step: 1,
  value: props.playlistScrollPosition,
  onChange: props.setPlaylistScrollPosition,
  vertical: true,
  handle: Handle,
  disabled: props.allTracksAreVisible
});

const mapDispatchToProps = {
  setPlaylistScrollPosition: position => (0, _actionCreators.setPlaylistScrollPosition)(100 - position)
};

const mapStateToProps = state => ({
  playlistScrollPosition: (0, _selectors.getPlaylistScrollPosition)(state),
  allTracksAreVisible: (0, _selectors.getVisibleTrackIds)(state).length === state.playlist.length
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ScrollBar);

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(39);
module.exports = __webpack_require__(78).f('iterator');


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(285);
__webpack_require__(61);
__webpack_require__(288);
__webpack_require__(289);
module.exports = __webpack_require__(8).Symbol;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(13);
var has = __webpack_require__(26);
var DESCRIPTORS = __webpack_require__(19);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(85);
var META = __webpack_require__(72).KEY;
var $fails = __webpack_require__(25);
var shared = __webpack_require__(57);
var setToStringTag = __webpack_require__(38);
var uid = __webpack_require__(44);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(78);
var wksDefine = __webpack_require__(79);
var enumKeys = __webpack_require__(286);
var isArray = __webpack_require__(105);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(14);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(52);
var createDesc = __webpack_require__(34);
var _create = __webpack_require__(46);
var gOPNExt = __webpack_require__(287);
var $GOPD = __webpack_require__(125);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(28);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(124).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(36).f = $propertyIsEnumerable;
  __webpack_require__(59).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(45)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(21)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(28);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(36);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(27);
var gOPN = __webpack_require__(124).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79)('asyncIterator');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79)('observable');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(291), __esModule: true };

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(292);
module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(293).set });


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(16);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(18)(Function.call, __webpack_require__(125).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(295), __esModule: true };

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(296);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(46) });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = (0, _extends3['default'])({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return _react2['default'].createElement('div', { className: className, style: elStyle });
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(76);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(77);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(80);

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(299);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(81);

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(303);

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(304);

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(305);

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(126);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        _this.onEnd();
        _this.removeDocumentEvents();
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) {
        var step = props.step,
            max = props.max,
            min = props.min;

        (0, _warning2['default'])(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }

    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.componentDidMount = function componentDidMount() {
      // Snapshot testing cannot handle refs, so be sure to null-check this.
      this.document = this.sliderRef && this.sliderRef.ownerDocument;
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    ComponentEnhancer.prototype.focus = function focus() {
      if (!this.props.disabled) {
        this.handlesRefs[0].focus();
      }
    };

    ComponentEnhancer.prototype.blur = function blur() {
      if (!this.props.disabled) {
        this.handlesRefs[0].blur();
      }
    };

    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };

    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      var pixelOffset = position - this.getSliderStart();
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          maximumTrackStyle = _props3.maximumTrackStyle,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, _classNames[prefixCls + '-with-marks'] = Object.keys(marks).length, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-vertical'] = vertical, _classNames[className] = className, _classNames));
      return _react2['default'].createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        _react2['default'].createElement('div', {
          className: prefixCls + '-rail',
          style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
        }),
        tracks,
        _react2['default'].createElement(_Steps2['default'], {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        _react2['default'].createElement(_Marks2['default'], {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(300);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(301);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(302);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(67);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(81);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends3['default'])({ bottom: offset }, dotStyle) : (0, _extends3['default'])({ left: offset }, dotStyle);
    if (isActived) {
      style = (0, _extends3['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[prefixCls + '-dot'] = true, _classNames[prefixCls + '-dot-active'] = isActived, _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[className + '-text'] = true, _classNames[className + '-text-active'] = isActive, _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(22);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(76);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(77);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(80);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3['default'])(this, Handle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.focus = function focus() {
    this.handle.focus();
  };

  Handle.prototype.blur = function blur() {
    this.handle.blur();
  };

  Handle.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        tabIndex = _props.tabIndex,
        restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = (0, _extends3['default'])({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = (0, _extends3['default'])({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }
    return _react2['default'].createElement('div', (0, _extends3['default'])({
      ref: function ref(node) {
        return _this2.handle = node;
      },
      role: 'slider',
      tabIndex: tabIndex || 0
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./playlist-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./playlist-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #playlist-window {\n    display: flex;\n    flex-direction: column;\n}\n\n#webamp .playlist-top {\n    width: 100%;\n    min-height: 20px;\n    max-height: 20px;\n    position: relative;\n    display: flex;\n}\n\n#webamp .playlist-top-left {\n    width: 25px;\n}\n\n#webamp .playlist-top-left-spacer {\n    width: 12px;\n}\n\n#webamp .playlist-top-left-fill {\n    flex-grow: 1;\n    background-position: right;\n}\n\n#webamp .playlist-top-right-spacer {\n    /* This goes to the right of the center */\n    width: 13px;\n}\n\n#webamp .playlist-top-right-fill {\n    flex-grow: 1;\n    background-position: right;\n}\n\n#webamp .playlist-top-title {\n    width: 100px;\n}\n\n#webamp .playlist-top-right {\n    width: 25px;\n}\n\n#webamp .playlist-middle {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n}\n\n#webamp .playlist-middle-left {\n    background-repeat: repeat-y;\n    width: 12px;\n    min-width: 12px;\n}\n\n#webamp .playlist-middle-center {\n    flex-grow: 1;\n    padding: 3px 0;\n    min-width: 0; /* Not sure why this is needed */\n}\n\n#webamp .playlist-tracks {\n    display: flex;\n    flex: 1 0 auto;\n    cursor: default;\n}\n\n#webamp .playlist-tracks .track-cell {\n    height: 13px;\n    line-height: 13px;\n    font-size: 9px;\n    letter-spacing: 0.5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n#webamp .playlist-track-durations > div {\n    padding-right: 3px;\n    text-align: right;\n}\n\n#webamp .playlist-track-titles {\n    flex: 1 1 auto;\n    overflow: hidden;\n}\n\n#webamp .playlist-track-titles > div {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n#webamp .playlist-middle-right {\n    background-repeat: repeat-y;\n    background-position: top right;\n    width: 20px;\n    min-width: 20px;\n    position: relative;\n    padding-bottom: 18px;\n}\n\n#webamp .playlist-scrollbar {\n    height: 100%;\n    width: 8px;\n    margin-left: 5px;\n}\n\n#webamp .playlist-scrollbar-handle {\n    width: 8x;\n    height: 18px;\n}\n\n#webamp .playlist-bottom {\n    width: 100%;\n    height: 38px;\n    min-height: 38px;\n    max-height: 38px;\n    position: relative;\n}\n\n#webamp .playlist-bottom-left {\n    width: 125px;\n    height: 100%;\n    position: absolute;\n}\n\n#webamp .playlist-menu li {\n    list-style: none;\n    display: none;\n    width: 22px;\n    height: 18px;\n    padding: 0;\n    margin: 0;\n}\n\n#webamp .playlist-menu li > div {\n    height: 100%;\n}\n\n#webamp .playlist-menu ul {\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    bottom: 0;\n}\n\n#webamp .playlist-menu.selected li {\n    display: block;\n}\n\n#webamp .playlist-menu .bar {\n    position: absolute;\n    bottom: 0;\n    left: -3px;\n    width: 3px;\n    height: 54px;\n}\n\n#webamp #playlist-add-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 14px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-remove-menu.playlist-menu .bar {\n    height: 72px;\n}\n\n#webamp #playlist-remove-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 43px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-selection-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 72px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-misc-menu {\n    position: absolute;\n    bottom: 12px;\n    left: 101px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp #playlist-list-menu {\n    position: absolute;\n    bottom: 12px;\n    right: 22px;\n    width: 22px;\n    height: 18px;\n}\n\n#webamp .playlist-bottom-right {\n    width: 150px;\n    height: 100%;\n    position: absolute;\n    right: 0;\n}\n\n#webamp .playlist-running-time-display {\n    position: absolute;\n    top: 10px;\n    left: 7px;\n    height: 10px;\n}\n\n#webamp .playlist-action-buttons {\n    position: absolute;\n    top: 22px;\n    left: 3px;\n    display: flex;\n}\n\n#webamp .playlist-action-buttons > div {\n    height: 10px;\n    width: 10px;\n}\n\n#webamp #playlist-window .playlist-visualizer {\n    width: 75px;\n    height: 100%;\n    position: absolute;\n    right: 150px;\n    display: none; /* Only show if the window is wide enough */\n}\n\n#webamp #playlist-window.wide .playlist-visualizer {\n    display: block;\n}\n\n#webamp #playlist-window .mini-time {\n    position: absolute;\n    top: 23px;\n    left: 66px;\n}\n\n#webamp #playlist-window #playlist-resize-target {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    height: 20px;\n    width: 20px;\n}\n\n#webamp #playlist-close-button {\n    position: absolute;\n    right: 2px;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #playlist-shade-button {\n    position: absolute;\n    right: 12px;\n    height: 9px;\n    width: 9px;\n    top: 3px;\n}\n\n#webamp #playlist-window-shade {\n    height: 14px;\n}\n\n#webamp #playlist-window-shade .left {\n    height: 14px;\n    background-repeat: no-repeat;\n}\n\n#webamp #playlist-window-shade .right {\n    height: 14px;\n    background-repeat: no-repeat;\n    background-position-x: right;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button,\n#webamp #playlist-window #playlist-scroll-down-button {\n    position: absolute;\n    width: 8px;\n    height: 5px;\n    right: 7px;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button {\n    top: 2px;\n}\n#webamp #playlist-window #playlist-scroll-down-button {\n    top: 8px;\n}\n\n#webamp #playlist-window-shade #playlist-resize-target {\n    position: absolute;\n    right: 20px;\n    top: 3px;\n    height: 9px;\n    width: 9px;\n}\n\n#webamp #playlist-shade-track-title {\n    position: absolute;\n    top: 4px;\n    left: 5px;\n}\n\n#webamp #playlist-shade-time {\n    position: absolute;\n    top: 4px;\n    right: 30px;\n}\n", ""]);

// exports


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = __webpack_require__(5);

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

var _selectors = __webpack_require__(7);

var _Band = __webpack_require__(310);

var _Band2 = _interopRequireDefault(_Band);

var _EqOn = __webpack_require__(311);

var _EqOn2 = _interopRequireDefault(_EqOn);

var _EqAuto = __webpack_require__(312);

var _EqAuto2 = _interopRequireDefault(_EqAuto);

var _EqGraph = __webpack_require__(313);

var _EqGraph2 = _interopRequireDefault(_EqGraph);

var _PresetsContextMenu = __webpack_require__(315);

var _PresetsContextMenu2 = _interopRequireDefault(_PresetsContextMenu);

var _EqualizerShade = __webpack_require__(316);

var _EqualizerShade2 = _interopRequireDefault(_EqualizerShade);

__webpack_require__(317);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bandClassName = band => `band-${band}`;

const EqualizerWindow = props => {
  const doubled = props.doubled,
        selected = props.selected,
        shade = props.shade;


  const className = (0, _classnames2.default)({
    selected,
    doubled,
    shade,
    window: true,
    draggable: true
  });
  return _react2.default.createElement(
    "div",
    {
      id: "equalizer-window",
      className: className,
      onMouseDown: props.focusWindow,
      onWheel: props.scrollVolume
    },
    props.shade ? _react2.default.createElement(_EqualizerShade2.default, null) : _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        {
          className: "equalizer-top title-bar draggable",
          onDoubleClick: props.toggleEqualizerShadeMode
        },
        _react2.default.createElement("div", {
          id: "equalizer-shade",
          onClick: props.toggleEqualizerShadeMode
        }),
        _react2.default.createElement("div", { id: "equalizer-close", onClick: props.closeEqualizerWindow })
      ),
      _react2.default.createElement(_EqOn2.default, null),
      _react2.default.createElement(_EqAuto2.default, null),
      _react2.default.createElement(_EqGraph2.default, null),
      _react2.default.createElement(_PresetsContextMenu2.default, null),
      _react2.default.createElement(_Band2.default, { id: "preamp", band: "preamp", onChange: props.setPreampValue }),
      _react2.default.createElement("div", { id: "plus12db", onClick: props.setEqToMax }),
      _react2.default.createElement("div", { id: "zerodb", onClick: props.setEqToMid }),
      _react2.default.createElement("div", { id: "minus12db", onClick: props.setEqToMin }),
      _constants.BANDS.map(hertz => _react2.default.createElement(_Band2.default, {
        key: hertz,
        id: bandClassName(hertz),
        band: hertz,
        onChange: props.setHertzValue(hertz)
      }))
    )
  );
};

EqualizerWindow.propTypes = {
  doubled: _propTypes2.default.bool.isRequired,
  selected: _propTypes2.default.bool.isRequired,
  shade: _propTypes2.default.bool.isRequired
};

// TODO: Convert to object shorthand
const mapDispatchToProps = dispatch => ({
  focusWindow: () => dispatch({ type: _actionTypes.SET_FOCUSED_WINDOW, window: _constants.WINDOWS.EQUALIZER }),
  setPreampValue: value => dispatch((0, _actionCreators.setPreamp)(value)),
  setEqToMin: () => dispatch((0, _actionCreators.setEqToMin)()),
  setEqToMid: () => dispatch((0, _actionCreators.setEqToMid)()),
  setEqToMax: () => dispatch((0, _actionCreators.setEqToMax)()),
  setHertzValue: hertz => value => dispatch((0, _actionCreators.setEqBand)(hertz, value)),
  closeEqualizerWindow: () => dispatch((0, _actionCreators.closeWindow)("equalizer")),
  toggleEqualizerShadeMode: () => dispatch((0, _actionCreators.toggleEqualizerShadeMode)()),
  scrollVolume: e => dispatch((0, _actionCreators.scrollVolume)(e))
});

const mapStateToProps = state => ({
  doubled: state.display.doubled,
  selected: state.windows.focused === _constants.WINDOWS.EQUALIZER,
  shade: (0, _selectors.getWindowShade)(state, "equalizer")
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EqualizerWindow);

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spriteOffsets = exports.spriteNumber = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Slider = __webpack_require__(122);

var _Slider2 = _interopRequireDefault(_Slider);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MAX_VALUE = 100;
// Given a value between 1-100, return the sprite number (0-27)
const spriteNumber = exports.spriteNumber = value => {
  const percent = value / 100;
  return Math.round(percent * 27);
};

// Given a sprite number, return the x,y
const spriteOffsets = exports.spriteOffsets = number => {
  const x = number % 14;
  const y = Math.floor(number / 14);
  return { x, y };
};

const Handle = () => _react2.default.createElement("div", { className: "rc-slider-handle" });

const Band = ({
  value,
  backgroundPosition,
  id,
  onChange,
  handleMouseDown,
  handleMouseUp
}) => _react2.default.createElement(
  "div",
  { id: id, className: "band", style: { backgroundPosition } },
  _react2.default.createElement(_Slider2.default, {
    type: "range",
    min: 0,
    max: MAX_VALUE,
    step: 1,
    value: MAX_VALUE - value,
    vertical: true,
    onChange: onChange,
    onBeforeChange: handleMouseDown,
    onAfterChange: handleMouseUp,
    handle: Handle
  })
);

const mapStateToProps = (state, ownProps) => {
  const value = state.equalizer.sliders[ownProps.band];

  var _spriteOffsets = spriteOffsets(spriteNumber(value));

  const x = _spriteOffsets.x,
        y = _spriteOffsets.y;

  const xOffset = x * 15; // Each sprite is 15px wide
  const yOffset = y * 65; // Each sprite is 15px tall
  const backgroundPosition = `-${xOffset}px -${yOffset}px`;
  return {
    id: ownProps.id,
    value,
    backgroundPosition
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleMouseDown: () => dispatch({ type: _actionTypes.SET_BAND_FOCUS, input: "eq", bandFocused: ownProps.band }),
  handleMouseUp: () => dispatch({ type: _actionTypes.UNSET_FOCUS })
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Band);

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqOn = props => {
  const className = (0, _classnames2.default)({
    selected: props.on
  });
  return _react2.default.createElement("div", { id: "on", className: className, onClick: props.toggleEq });
};

const mapStateToProps = state => ({ on: state.equalizer.on });

exports.default = (0, _reactRedux.connect)(mapStateToProps, { toggleEq: _actionCreators.toggleEq })(EqOn);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _actionTypes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqAuto = props => {
  const className = (0, _classnames2.default)({
    selected: props.auto
  });
  return _react2.default.createElement("div", { id: "auto", className: className, onClick: props.toggleAuto });
};

const toggleAuto = () => (dispatch, getState) => {
  dispatch({ type: _actionTypes.SET_EQ_AUTO, value: !getState().equalizer.auto });
};

const mapDispatchToProps = { toggleAuto };
exports.default = (0, _reactRedux.connect)(state => ({ toggleAuto: state.equalizer.toggleAuto }), mapDispatchToProps)(EqAuto);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _cardinalSplineJs = __webpack_require__(314);

var _utils = __webpack_require__(9);

var _constants = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EqGraph extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.width = this.canvas.width * 1; // Cast to int
    this.height = this.canvas.height * 1; // Cast to int

    if (this.props.lineColorsImage) {
      this.createColorPattern(this.props.lineColorsImage);
    }
    if (this.props.preampLineUrl) {
      this.createPreampLineImage(this.props.preampLineUrl);
    }
  }

  componentDidUpdate() {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
    this.drawPreampLine();
    this.drawEqLine(); // This should paint on top of the preamp line
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lineColorsImage !== nextProps.lineColorsImage) {
      this.createColorPattern(nextProps.lineColorsImage);
    }
    if (this.props.preampLineUrl !== nextProps.preampLineUrl) {
      this.createPreampLineImage(nextProps.preampLineUrl);
    }
    return true;
  }

  createPreampLineImage(preampLineUrl) {
    const preampLineImg = new Image();
    preampLineImg.onload = () => {
      this.setState({ preampLineImg });
    };
    preampLineImg.src = preampLineUrl;
  }

  createColorPattern(lineColorsImage) {
    const bgImage = new Image();
    bgImage.onload = () => {
      const colorsCanvas = document.createElement("canvas");
      const colorsCtx = colorsCanvas.getContext("2d");
      colorsCanvas.width = bgImage.width * 2;
      colorsCanvas.height = bgImage.height * 2;
      colorsCtx.drawImage(bgImage, 0, 0, colorsCanvas.width, colorsCanvas.height);
      this.setState({
        colorPattern: this.canvasCtx.createPattern(colorsCanvas, "repeat-x")
      });
    };
    bgImage.src = lineColorsImage;
  }

  drawEqLine() {
    if (!this.state.colorPattern) {
      // The skin has not finished loading yet
      return;
    }
    const props = this.props;

    const amplitudes = _constants.BANDS.map(band => props[band]);

    this.canvasCtx.strokeStyle = this.state.colorPattern;
    this.canvasCtx.lineWidth = 2;
    this.canvasCtx.beginPath();
    const paddingLeft = 4; // TODO: This should be 3

    const min = 1;
    const max = 31;

    const points = amplitudes.reduce((prev, value, i) => {
      const percent = (100 - value) / 100;
      const y = (0, _utils.percentToRange)(percent, min, max);
      return prev.concat(paddingLeft + i * 16, y);
    }, []);

    // Spline between points in order to create nice curves
    const tension = 0.5;
    const resolution = 4; // Points in each segment
    const smoothPoints = (0, _cardinalSplineJs.getCurvePoints)(points, tension, resolution);
    for (let i = 0; i < smoothPoints.length; i += 2) {
      // Splining can push peaks out of bounds. So we fudge them back in.
      const y = (0, _utils.clamp)(smoothPoints[i + 1], min, max);
      this.canvasCtx.lineTo(smoothPoints[i], y);
    }

    this.canvasCtx.stroke();
  }

  drawPreampLine() {
    const preampLineImg = this.state.preampLineImg;

    if (!preampLineImg) {
      // The skin has not finished loading yet
      return;
    }
    const preampValue = (0, _utils.percentToRange)(this.props.preamp / 100, 0, 30);
    this.canvasCtx.drawImage(this.state.preampLineImg, 0, preampValue, preampLineImg.width * 2, preampLineImg.height * 2);
  }

  render() {
    return _react2.default.createElement("canvas", {
      id: "eqGraph",
      ref: node => this.canvas = node,
      width: "152",
      height: "32"
    });
  }
}

exports.default = (0, _reactRedux.connect)(state => (0, _extends3.default)({}, state.equalizer.sliders, {
  lineColorsImage: state.display.skinImages.EQ_GRAPH_LINE_COLORS,
  preampLineUrl: state.display.skinImages.EQ_PREAMP_LINE
}))(EqGraph);

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

/*!	Curve calc function for canvas 2.3.6
 *	(c) Epistemex 2013-2016
 *	www.epistemex.com
 *	License: MIT
 */

/**
 * Calculates an array containing points representing a cardinal spline through given point array.
 * Points must be arranged as: [x1, y1, x2, y2, ..., xn, yn].
 *
 * There must be a minimum of two points in the input array but the function
 * is only useful where there are three points or more.
 *
 * The points for the cardinal spline are returned as a new array.
 *
 * @param {Array} points - point array
 * @param {Number} [tension=0.5] - tension. Typically between [0.0, 1.0] but can be exceeded
 * @param {Number} [numOfSeg=25] - number of segments between two points (line resolution)
 * @param {Boolean} [close=false] - Close the ends making the line continuous
 * @returns {Float32Array} New array with the calculated points that was added to the path
 */
function getCurvePoints(points, tension, numOfSeg, close) {

	'use strict';

	if (typeof points === "undefined" || points.length < 2) return new Float32Array(0);

	// options or defaults
	tension = typeof tension === "number" ? tension : 0.5;
	numOfSeg = typeof numOfSeg === "number" ? numOfSeg : 25;

	var pts,															// for cloning point array
		i = 1,
		l = points.length,
		rPos = 0,
		rLen = (l-2) * numOfSeg + 2 + (close ? 2 * numOfSeg: 0),
		res = new Float32Array(rLen),
		cache = new Float32Array((numOfSeg + 2) << 2),
		cachePtr = 4;

	pts = points.slice(0);

	if (close) {
		pts.unshift(points[l - 1]);										// insert end point as first point
		pts.unshift(points[l - 2]);
		pts.push(points[0], points[1]); 								// first point as last point
	}
	else {
		pts.unshift(points[1]);											// copy 1. point and insert at beginning
		pts.unshift(points[0]);
		pts.push(points[l - 2], points[l - 1]);							// duplicate end-points
	}

	// cache inner-loop calculations as they are based on t alone
	cache[0] = 1;														// 1,0,0,0

	for (; i < numOfSeg; i++) {

		var st = i / numOfSeg,
			st2 = st * st,
			st3 = st2 * st,
			st23 = st3 * 2,
			st32 = st2 * 3;

		cache[cachePtr++] =	st23 - st32 + 1;							// c1
		cache[cachePtr++] =	st32 - st23;								// c2
		cache[cachePtr++] =	st3 - 2 * st2 + st;							// c3
		cache[cachePtr++] =	st3 - st2;									// c4
	}

	cache[++cachePtr] = 1;												// 0,1,0,0

	// calc. points
	parse(pts, cache, l, tension);

	if (close) {
		//l = points.length;
		pts = [];
		pts.push(points[l - 4], points[l - 3],
				 points[l - 2], points[l - 1], 							// second last and last
				 points[0], points[1],
				 points[2], points[3]); 								// first and second
		parse(pts, cache, 4, tension);
	}

	function parse(pts, cache, l, tension) {

		for (var i = 2, t; i < l; i += 2) {

			var pt1 = pts[i],
				pt2 = pts[i+1],
				pt3 = pts[i+2],
				pt4 = pts[i+3],

				t1x = (pt3 - pts[i-2]) * tension,
				t1y = (pt4 - pts[i-1]) * tension,
				t2x = (pts[i+4] - pt1) * tension,
				t2y = (pts[i+5] - pt2) * tension,
				c = 0, c1, c2, c3, c4;

			for (t = 0; t < numOfSeg; t++) {

				c1 = cache[c++];
				c2 = cache[c++];
				c3 = cache[c++];
				c4 = cache[c++];

				res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
				res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
			}
		}
	}

	// add last point
	l = close ? 0 : points.length - 2;
	res[rPos++] = points[l++];
	res[rPos] = points[l];

	return res
}

if (true) exports.getCurvePoints = getCurvePoints;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actionCreators = __webpack_require__(2);

var _ContextMenu = __webpack_require__(20);

var _ContextMenuTarget = __webpack_require__(75);

var _ContextMenuTarget2 = _interopRequireDefault(_ContextMenuTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PresetsContextMenu = props => _react2.default.createElement(
  _ContextMenuTarget2.default,
  { top: true, id: "presets-context", handle: _react2.default.createElement("div", { id: "presets" }) },
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.openEqfFileDialog, label: "Load" }),
  _react2.default.createElement(_ContextMenu.Node, { onClick: props.downloadPreset, label: "Save" })
);

const mapDispatchToProps = { openEqfFileDialog: _actionCreators.openEqfFileDialog, downloadPreset: _actionCreators.downloadPreset };

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PresetsContextMenu);

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Volume = __webpack_require__(119);

var _Volume2 = _interopRequireDefault(_Volume);

var _Balance = __webpack_require__(118);

var _Balance2 = _interopRequireDefault(_Balance);

var _utils = __webpack_require__(9);

var _actionCreators = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EqualizerShade = props => {
  const volume = props.volume,
        balance = props.balance;


  const classes = ["left", "center", "right"];
  const eqVolumeClassName = (0, _utils.segment)(0, 100, volume, classes);
  const eqBalanceClassName = (0, _utils.segment)(-100, 100, balance, classes);
  return _react2.default.createElement(
    "div",
    {
      className: "draggable",
      onDoubleClick: props.toggleEqualizerShadeMode,
      style: { width: "100%", height: "100%" }
    },
    _react2.default.createElement("div", { id: "equalizer-shade", onClick: props.toggleEqualizerShadeMode }),
    _react2.default.createElement("div", { id: "equalizer-close", onClick: props.closeEqualizerWindow }),
    _react2.default.createElement(_Volume2.default, { id: "equalizer-volume", className: eqVolumeClassName }),
    _react2.default.createElement(_Balance2.default, { id: "equalizer-balance", className: eqBalanceClassName })
  );
};

const mapDispatchToProps = {
  closeWindow: () => (0, _actionCreators.closeWindow)("equalizer"),
  toggleEqualizerShadeMode: _actionCreators.toggleEqualizerShadeMode
};

const mapStateToProps = state => ({
  volume: state.media.volume,
  balance: state.media.balance
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EqualizerShade);

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./equalizer-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./equalizer-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #equalizer-window {\n    height: 116px;\n    width: 275px;\n}\n\n#webamp #equalizer-window.shade {\n    height: 14px;\n}\n\n#webamp #equalizer-volume {\n    position: absolute;\n    left: 61px;\n    top: 4px;\n    height: 6px;\n    width: 97px;\n    background-position: 0 0;\n}\n\n#webamp #equalizer-volume::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-volume::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-balance {\n    position: absolute;\n    left: 164px;\n    top: 4px;\n    height: 6px;\n    width: 43px;\n    background-position: 0 0;\n}\n\n#webamp #equalizer-balance::-webkit-slider-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp #equalizer-balance::-moz-range-thumb {\n    height: 7px;\n    width: 3px;\n}\n\n#webamp .equalizer-top {\n    height: 14px;\n    width: 275px;\n    position: relative;\n}\n\n#webamp #equalizer-close {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 264px;\n    top: 3px;\n}\n\n#webamp #equalizer-shade {\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 254px;\n    top: 3px;\n}\n\n#webamp #on {\n    position: absolute;\n    width: 26px;\n    height: 12px;\n    top: 18px;\n    left: 14px;\n}\n\n#webamp #auto {\n    position: absolute;\n    width: 32px;\n    height: 12px;\n    top: 18px;\n    left: 40px;\n}\n\n#webamp #presets-context {\n    position: absolute;\n    width: 44px;\n    height: 12px;\n    top: 18px;\n    left: 217px;\n}\n\n#webamp #presets {\n    width: 100%;\n    height: 100%;\n}\n\n#webamp #eqGraph {\n    position: absolute;\n    width: 113px;\n    height: 19px;\n    top: 17px;\n    left: 86px;\n}\n\n#webamp #preamp {\n    position: absolute;\n    left: 21px;\n    top: 38px;\n}\n\n#webamp #plus12db {\n    position: absolute;\n    left: 45px;\n    top: 36px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #zerodb {\n    position: absolute;\n    left: 45px;\n    top: 64px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #minus12db {\n    position: absolute;\n    left: 45px;\n    top: 95px;\n    width: 22px;\n    height: 8px;\n}\n\n#webamp #band-60 {\n    position: absolute;\n    left: 78px;\n    top: 38px;\n}\n\n#webamp #band-170 {\n    position: absolute;\n    left: 96px;\n    top: 38px;\n}\n\n#webamp #band-310 {\n    position: absolute;\n    left: 114px;\n    top: 38px;\n}\n\n#webamp #band-600 {\n    position: absolute;\n    left: 132px;\n    top: 38px;\n}\n\n#webamp #band-1000 {\n    position: absolute;\n    left: 150px;\n    top: 38px;\n}\n\n#webamp #band-3000 {\n    position: absolute;\n    left: 168px;\n    top: 38px;\n}\n\n#webamp #band-6000 {\n    position: absolute;\n    left: 186px;\n    top: 38px;\n}\n\n#webamp #band-12000 {\n    position: absolute;\n    left: 204px;\n    top: 38px;\n}\n\n#webamp #band-14000 {\n    position: absolute;\n    left: 222px;\n    top: 38px;\n}\n\n#webamp #band-16000 {\n    position: absolute;\n    left: 240px;\n    top: 38px;\n}\n\n#webamp .band {\n    width: 14px;\n    height: 63px;\n}\n\n#webamp .band .rc-slider {\n    height: 51px;\n    width: 14px;\n    margin-top: 6px;\n}\n\n#webamp .band .rc-slider .rc-slider-handle {\n    width: 11px;\n    height: 11px;\n    margin: -6px 0 0 1px;\n    position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenWindow = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(320);

var _actionTypes = __webpack_require__(3);

var _actionCreators = __webpack_require__(2);

var _selectors = __webpack_require__(7);

var _ResizeTarget = __webpack_require__(121);

var _ResizeTarget2 = _interopRequireDefault(_ResizeTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Text = ({ children }) => {
  const letters = children.split("");
  return letters.map((letter, i) => _react2.default.createElement("div", {
    key: i,
    className: `draggable gen-text-letter gen-text-${letter === " " ? "space" : letter.toLowerCase()}`
  }));
};

const CHROME_WIDTH = 19;
const CHROME_HEIGHT = 34;

// Named export for testing
const GenWindow = exports.GenWindow = ({
  selected,
  children,
  close,
  title,
  setFocus,
  windowId,
  windowSize,
  setGenWindowSize,
  scrollVolume: handleWheel,
  width,
  height
}) => {
  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)("gen-window", "window", { selected }),
      onMouseDown: () => setFocus(windowId),
      onWheel: handleWheel,
      style: { width, height }
    },
    _react2.default.createElement(
      "div",
      { className: "gen-top draggable" },
      _react2.default.createElement("div", { className: "gen-top-left draggable" }),
      _react2.default.createElement("div", { className: "gen-top-left-fill draggable" }),
      _react2.default.createElement("div", { className: "gen-top-left-end draggable" }),
      _react2.default.createElement(
        "div",
        { className: "gen-top-title draggable" },
        _react2.default.createElement(
          Text,
          null,
          title
        )
      ),
      _react2.default.createElement("div", { className: "gen-top-right-end draggable" }),
      _react2.default.createElement("div", { className: "gen-top-right-fill draggable" }),
      _react2.default.createElement(
        "div",
        { className: "gen-top-right draggable" },
        _react2.default.createElement("div", { className: "gen-close selected", onClick: () => close(windowId) })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "gen-middle" },
      _react2.default.createElement(
        "div",
        { className: "gen-middle-left draggable" },
        _react2.default.createElement("div", { className: "gen-middle-left-bottom draggable" })
      ),
      _react2.default.createElement(
        "div",
        { className: "gen-middle-center" },
        children({
          width: width - CHROME_WIDTH,
          height: height - CHROME_HEIGHT
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "gen-middle-right draggable" },
        _react2.default.createElement("div", { className: "gen-middle-right-bottom draggable" })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "gen-bottom draggable" },
      _react2.default.createElement("div", { className: "gen-bottom-left draggable" }),
      _react2.default.createElement(
        "div",
        { className: "gen-bottom-right draggable" },
        _react2.default.createElement(_ResizeTarget2.default, {
          currentSize: windowSize,
          setWindowSize: size => setGenWindowSize(windowId, size),
          id: "gen-resize-target"
        })
      )
    )
  );
};

GenWindow.propTypes = {
  title: _propTypes2.default.string.isRequired,
  windowId: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.func.isRequired,
  close: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  var _getWindowPixelSize = (0, _selectors.getWindowPixelSize)(state, ownProps.windowId);

  const width = _getWindowPixelSize.width,
        height = _getWindowPixelSize.height;

  return {
    width,
    height,
    selected: state.windows.focused === ownProps.windowId,
    windowSize: state.windows.genWindows[ownProps.windowId].size
  };
};

const mapDispatchToProps = {
  setFocus: windowId => ({ type: _actionTypes.SET_FOCUSED_WINDOW, window: windowId }),
  close: windowId => (0, _actionCreators.closeWindow)(windowId),
  setGenWindowSize: _actionCreators.setWindowSize,
  scrollVolume: _actionCreators.scrollVolume
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GenWindow);

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(321);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./gen-window.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./gen-window.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#webamp .gen-text-space {\n    width: 5px;\n}\n\n#webamp .gen-text-letter {\n    height: 7px;\n    display: inline-block;\n}\n\n#webamp .gen-window {\n    /* Default size */\n    width: 275px;\n    height: 116px;\n    display: flex;\n    flex-direction: column;\n}\n\n#webamp .gen-top {\n    height: 20px;\n    display: flex;\n    flex-direction: row;\n}\n\n#webamp .gen-top-left {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-top-title {\n    line-height: 7px;\n    margin-top: 2px;\n    /* TODO: This should be a conciquence of the repeating tiles, not hard coded */\n    padding: 0 3px 0 4px;\n}\n\n#webamp .gen-top-left-fill {\n    flex-grow: 1;\n    height: 20px;\n    background-position: left;\n}\n\n#webamp .gen-top-right-fill {\n    flex-grow: 1;\n    height: 20px;\n    background-position: right;\n}\n\n#webamp .gen-top-left-end {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-top-right {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-top-right-end {\n    width: 25px;\n    height: 20px;\n}\n\n#webamp .gen-close {\n    width: 9px;\n    height: 9px;\n    position: absolute;\n    right: 2px;\n    top: 3px;\n}\n\n#webamp .gen-middle {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    position: relative;\n}\n\n#webamp .gen-middle-left {\n    width: 11px;\n}\n\n#webamp .gen-middle-left-bottom {\n    width: 11px;\n    height: 24px;\n    bottom: 0;\n    position: absolute;\n}\n\n#webamp .gen-middle-center {\n    flex-grow: 1;\n    position: relative;\n}\n\n#webamp .gen-middle-right {\n    width: 8px;\n}\n\n#webamp .gen-middle-right-bottom {\n    width: 8px;\n    height: 24px;\n    bottom: 0;\n    position: absolute;\n}\n\n#webamp .gen-bottom {\n    height: 14px;\n    background-repeat: repeat-x;\n}\n\n#webamp .gen-bottom-left {\n    position: absolute;\n    left: 0;\n    width: 125px;\n    height: 14px;\n}\n\n#webamp .gen-bottom-right {\n    position: absolute;\n    right: 0;\n    width: 125px;\n    height: 14px;\n}\n\n#webamp .gen-bottom-right #gen-resize-target {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    height: 20px;\n    width: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entries = __webpack_require__(112);

var _entries2 = _interopRequireDefault(_entries);

var _slicedToArray2 = __webpack_require__(32);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactRedux = __webpack_require__(1);

var _constants = __webpack_require__(5);

var _skinSelectors = __webpack_require__(323);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CSS_PREFIX = "#webamp"; // Dynamically set the css background images for all the sprites


const mapRegionNamesToIds = {
  normal: "mainWindowClipPath",
  windowshade: "shadeMainWindowClipPath",
  equalizer: "equalizerWindowClipPath",
  equalizerws: "shadeEqualizerWindowClipPath"
};

const mapRegionNamesToMatcher = {
  normal: "#main-window:not(.shade)",
  windowshade: "#main-window.shade",
  equalizer: "#equalizer-window:not(.shade)",
  equalizerws: "#equalizer-window.shade"
};

const numExIsUsed = skinImages => !!skinImages.DIGIT_0_EX;

class Css extends _react2.default.Component {
  componentWillMount() {
    const style = document.createElement("style");
    style.type = "text/css";
    document.head.appendChild(style);
    this.style = style;
  }

  componentWillUnmount() {
    this.style.remove();
    this.style = null;
  }

  render() {
    return (0, _reactDom.createPortal)(this.props.children, this.style);
  }
}

class ClipPaths extends _react2.default.Component {
  componentWillMount() {
    const paths = document.createElement("div");
    document.body.appendChild(paths);
    this.paths = paths;
  }

  componentWillUnmount() {
    this.paths.remove();
    this.paths = null;
  }

  render() {
    // this.props.children should be an object containing arrays of strings. The
    // keys are ids, and the arrays are arrays of polygon point strings
    const children = this.props.children;


    return (0, _reactDom.createPortal)(_react2.default.createElement(
      "svg",
      { height: 0, width: 0 },
      _react2.default.createElement(
        "defs",
        null,
        (0, _keys2.default)(children).map(id => _react2.default.createElement(
          "clipPath",
          { id: id, key: id },
          children[id].map((points, i) => _react2.default.createElement("polygon", { points: points, key: i }))
        ))
      )
    ), this.paths);
  }
}

const Skin = props => {
  const skinImages = props.skinImages,
        skinCursors = props.skinCursors,
        skinGenLetterWidths = props.skinGenLetterWidths;

  if (!skinImages || !skinCursors) {
    return null;
  }
  const cssRules = [];
  (0, _keys2.default)(_skinSelectors.imageSelectors).forEach(imageName => {
    const imageUrl = skinImages[imageName];
    if (imageUrl) {
      _skinSelectors.imageSelectors[imageName].forEach(selector => {
        cssRules.push(`${CSS_PREFIX} ${selector} {background-image: url(${imageUrl})}`);
      });
    }
  });

  if (skinGenLetterWidths != null) {
    _constants.LETTERS.forEach(letter => {
      const width = skinGenLetterWidths[`GEN_TEXT_${letter}`];
      const selectedWidth = skinGenLetterWidths[`GEN_LETTER_SELECTED_${letter}`];
      cssRules.push(`${CSS_PREFIX} .gen-text-${letter.toLowerCase()} {width: ${width}px;}`);
      cssRules.push(`${CSS_PREFIX} .selected .gen-text-${letter.toLowerCase()} {width: ${selectedWidth}px;}`);
    });
  }
  (0, _keys2.default)(_skinSelectors.cursorSelectors).forEach(cursorName => {
    const cursorUrl = skinCursors[cursorName];
    if (cursorUrl) {
      _skinSelectors.cursorSelectors[cursorName].forEach(selector => {
        cssRules.push(`${CSS_PREFIX} ${selector} {cursor: url(${cursorUrl}), auto}`);
      });
    }
  });

  if (numExIsUsed(skinImages)) {
    // This alternate number file requires that the minus sign be
    // formatted differently.
    cssRules.push(`${CSS_PREFIX} .status #time #minus-sign { top: 0px; left: -1px; width: 9px; height: 13px; }`);
  }

  const clipPaths = {};
  for (const _ref of (0, _entries2.default)(props.skinRegion)) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

    const regionName = _ref2[0];
    const polygons = _ref2[1];

    if (polygons) {
      const matcher = mapRegionNamesToMatcher[regionName];
      const id = mapRegionNamesToIds[regionName];
      clipPaths[id] = polygons;
      cssRules.push(`${CSS_PREFIX} ${matcher} { clip-path: url(#${id}); }`);
    }
  }
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      Css,
      null,
      cssRules.join("\n")
    ),
    _react2.default.createElement(
      ClipPaths,
      null,
      clipPaths
    )
  );
};

exports.default = (0, _reactRedux.connect)(state => ({
  skinImages: state.display.skinImages,
  skinCursors: state.display.skinCursors,
  skinRegion: state.display.skinRegion,
  skinGenLetterWidths: state.display.skinGenLetterWidths
}))(Skin);

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cursorSelectors = exports.imageSelectors = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _constants = __webpack_require__(5);

var _skinSprites = __webpack_require__(109);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const imageSelectors = exports.imageSelectors = {
  MAIN_BALANCE_BACKGROUND: ["#balance"],
  MAIN_BALANCE_THUMB: ["#balance::-webkit-slider-thumb", "#balance::-moz-range-thumb"],
  MAIN_BALANCE_THUMB_ACTIVE: ["#balance::-webkit-slider-thumb:active", "#balance::-moz-range-thumb:active"],
  MAIN_PREVIOUS_BUTTON: [".actions #previous"],
  MAIN_PREVIOUS_BUTTON_ACTIVE: [".actions #previous:active"],
  MAIN_PLAY_BUTTON: [".actions #play"],
  MAIN_PLAY_BUTTON_ACTIVE: [".actions #play:active"],
  MAIN_PAUSE_BUTTON: [".actions #pause"],
  MAIN_PAUSE_BUTTON_ACTIVE: [".actions #pause:active"],
  MAIN_STOP_BUTTON: [".actions #stop"],
  MAIN_STOP_BUTTON_ACTIVE: [".actions #stop:active"],
  MAIN_NEXT_BUTTON: [".actions #next"],
  MAIN_NEXT_BUTTON_ACTIVE: [".actions #next:active"],
  MAIN_EJECT_BUTTON: ["#eject"],
  MAIN_EJECT_BUTTON_ACTIVE: ["#eject:active"],
  MAIN_WINDOW_BACKGROUND: ["#main-window"],
  MAIN_STEREO: [".media-info #stereo", ".stop .media-info #stereo.selected"],
  MAIN_STEREO_SELECTED: [".media-info #stereo.selected"],
  MAIN_MONO: [".media-info #mono", ".stop .media-info #mono.selected"],
  MAIN_MONO_SELECTED: [".media-info #mono.selected"],
  NO_MINUS_SIGN: ["#time #minus-sign"],
  MINUS_SIGN: ["#time.countdown #minus-sign"],
  DIGIT_0: [".digit-0"],
  DIGIT_1: [".digit-1"],
  DIGIT_2: [".digit-2"],
  DIGIT_3: [".digit-3"],
  DIGIT_4: [".digit-4"],
  DIGIT_5: [".digit-5"],
  DIGIT_6: [".digit-6"],
  DIGIT_7: [".digit-7"],
  DIGIT_8: [".digit-8"],
  DIGIT_9: [".digit-9"],
  NO_MINUS_SIGN_EX: ["#time #minus-sign"],
  MINUS_SIGN_EX: ["#time.countdown #minus-sign"],
  DIGIT_0_EX: [".digit-0"],
  DIGIT_1_EX: [".digit-1"],
  DIGIT_2_EX: [".digit-2"],
  DIGIT_3_EX: [".digit-3"],
  DIGIT_4_EX: [".digit-4"],
  DIGIT_5_EX: [".digit-5"],
  DIGIT_6_EX: [".digit-6"],
  DIGIT_7_EX: [".digit-7"],
  DIGIT_8_EX: [".digit-8"],
  DIGIT_9_EX: [".digit-9"],
  MAIN_PLAYING_INDICATOR: [".play #play-pause"],
  MAIN_PAUSED_INDICATOR: [".pause #play-pause"],
  MAIN_STOPPED_INDICATOR: [".stop #play-pause"],
  MAIN_NOT_WORKING_INDICATOR: ["#work-indicator"],
  MAIN_WORKING_INDICATOR: ["#work-indicator.selected"],
  PLAYLIST_TOP_TILE: [".playlist-top-left-fill", ".playlist-top-left-spacer", ".playlist-top-right-fill", ".playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_CORNER: [".playlist-top-left"],
  PLAYLIST_TITLE_BAR: [".playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER: [".playlist-top-right"],
  PLAYLIST_TOP_TILE_SELECTED: [".selected .playlist-top-left-fill", ".selected .playlist-top-left-spacer", ".selected .playlist-top-right-fill", ".selected .playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_SELECTED: [".selected .playlist-top-left"],
  PLAYLIST_TITLE_BAR_SELECTED: [".selected .playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER_SELECTED: [".selected .playlist-top-right"],
  PLAYLIST_LEFT_TILE: [".playlist-middle-left"],
  PLAYLIST_RIGHT_TILE: [".playlist-middle-right"],
  PLAYLIST_SCROLL_HANDLE: [".playlist-scrollbar-handle"],
  PLAYLIST_SCROLL_HANDLE_SELECTED: [".playlist-scrollbar-handle:active"],
  PLAYLIST_BOTTOM_TILE: [".playlist-bottom"],
  PLAYLIST_BOTTOM_LEFT_CORNER: [".playlist-bottom-left"],
  PLAYLIST_BOTTOM_RIGHT_CORNER: [".playlist-bottom-right"],
  PLAYLIST_VISUALIZER_BACKGROUND: [".playlist-visualizer"],
  PLAYLIST_SHADE_BACKGROUND: ["#playlist-window-shade"],
  PLAYLIST_SHADE_BACKGROUND_LEFT: ["#playlist-window-shade .left"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT: ["#playlist-window-shade .right"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED: ["#playlist-window-shade.selected .right"],

  PLAYLIST_ADD_MENU_BAR: ["#playlist-add-menu.selected .bar"],
  PLAYLIST_ADD_URL: ["#playlist-add-menu .add-url"],
  PLAYLIST_ADD_URL_SELECTED: ["#playlist-add-menu .hover .add-url"],
  PLAYLIST_ADD_DIR: ["#playlist-add-menu .add-dir"],
  PLAYLIST_ADD_DIR_SELECTED: ["#playlist-add-menu .hover .add-dir"],
  PLAYLIST_ADD_FILE: ["#playlist-add-menu .add-file"],
  PLAYLIST_ADD_FILE_SELECTED: ["#playlist-add-menu .hover .add-file"],

  PLAYLIST_REMOVE_MENU_BAR: ["#playlist-remove-menu.selected .bar"],
  PLAYLIST_REMOVE_ALL: ["#playlist-remove-menu .remove-all"],
  PLAYLIST_REMOVE_ALL_SELECTED: ["#playlist-remove-menu .hover .remove-all"],
  PLAYLIST_CROP: ["#playlist-remove-menu .crop"],
  PLAYLIST_CROP_SELECTED: ["#playlist-remove-menu .hover .crop"],
  PLAYLIST_REMOVE_SELECTED: ["#playlist-remove-menu .remove-selected"],
  PLAYLIST_REMOVE_SELECTED_SELECTED: ["#playlist-remove-menu .hover .remove-selected"],
  PLAYLIST_REMOVE_MISC: ["#playlist-remove-menu .remove-misc"],
  PLAYLIST_REMOVE_MISC_SELECTED: ["#playlist-remove-menu .hover .remove-misc"],

  PLAYLIST_SELECT_MENU_BAR: ["#playlist-selection-menu.selected .bar"],
  PLAYLIST_INVERT_SELECTION: ["#playlist-selection-menu .invert-selection"],
  PLAYLIST_INVERT_SELECTION_SELECTED: ["#playlist-selection-menu .hover .invert-selection"],
  PLAYLIST_SELECT_ZERO: ["#playlist-selection-menu .select-zero"],
  PLAYLIST_SELECT_ZERO_SELECTED: ["#playlist-selection-menu .hover .select-zero"],
  PLAYLIST_SELECT_ALL: ["#playlist-selection-menu .select-all"],
  PLAYLIST_SELECT_ALL_SELECTED: ["#playlist-selection-menu .hover .select-all"],
  PLAYLIST_CLOSE_SELECTED: ["#playlist-close-button:active"],
  PLAYLIST_COLLAPSE_SELECTED: ["#playlist-window #playlist-shade-button:active"],
  PLAYLIST_EXPAND_SELECTED: ["#playlist-window-shade #playlist-shade-button:active"],

  PLAYLIST_MISC_MENU_BAR: ["#playlist-misc-menu.selected .bar"],
  PLAYLIST_MISC_OPTIONS: ["#playlist-misc-menu .misc-options"],
  PLAYLIST_MISC_OPTIONS_SELECTED: ["#playlist-misc-menu .hover .misc-options"],
  PLAYLIST_FILE_INFO: ["#playlist-misc-menu .file-info"],
  PLAYLIST_FILE_INFO_SELECTED: ["#playlist-misc-menu .hover .file-info"],
  PLAYLIST_SORT_LIST: ["#playlist-misc-menu .sort-list"],
  PLAYLIST_SORT_LIST_SELECTED: ["#playlist-misc-menu .hover .sort-list"],

  PLAYLIST_LIST_BAR: ["#playlist-list-menu.selected .bar"],
  PLAYLIST_NEW_LIST: ["#playlist-list-menu .new-list"],
  PLAYLIST_NEW_LIST_SELECTED: ["#playlist-list-menu .hover .new-list"],
  PLAYLIST_LOAD_LIST: ["#playlist-list-menu .load-list"],
  PLAYLIST_LOAD_LIST_SELECTED: ["#playlist-list-menu .hover .load-list"],
  PLAYLIST_SAVE_LIST: ["#playlist-list-menu .save-list"],
  PLAYLIST_SAVE_LIST_SELECTED: ["#playlist-list-menu .hover .save-list"],

  EQ_WINDOW_BACKGROUND: ["#equalizer-window:not(.shade)"],
  EQ_TITLE_BAR: [".equalizer-top"],
  EQ_TITLE_BAR_SELECTED: [".selected .equalizer-top"],
  EQ_SLIDER_BACKGROUND: [".band"],
  EQ_SLIDER_THUMB: [".band .rc-slider-handle"],
  EQ_SLIDER_THUMB_SELECTED: [".band .rc-slider-handle:active"],
  EQ_ON_BUTTON: ["#on"],
  EQ_ON_BUTTON_DEPRESSED: ["#on:active"],
  EQ_ON_BUTTON_SELECTED: ["#on.selected"],
  EQ_ON_BUTTON_SELECTED_DEPRESSED: ["#on.selected:active"],
  EQ_AUTO_BUTTON: ["#auto"],
  EQ_AUTO_BUTTON_DEPRESSED: ["#auto:active"],
  EQ_AUTO_BUTTON_SELECTED: ["#auto.selected"],
  EQ_AUTO_BUTTON_SELECTED_DEPRESSED: ["#auto.selected:active"],
  EQ_GRAPH_BACKGROUND: ["#eqGraph"],
  EQ_PRESETS_BUTTON: ["#presets"],
  EQ_PRESETS_BUTTON_SELECTED: ["#presets:active"],
  EQ_PREAMP_LINE: ["#preamp-line"],
  EQ_SHADE_BACKGROUND: ["#equalizer-window.shade"],
  EQ_SHADE_BACKGROUND_SELECTED: ["#equalizer-window.shade.selected"],
  EQ_SHADE_VOLUME_SLIDER_LEFT: ["#equalizer-volume.left::-webkit-slider-thumb", "#equalizer-volume.left::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_CENTER: ["#equalizer-volume.center::-webkit-slider-thumb", "#equalizer-volume.center::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_RIGHT: ["#equalizer-volume.right::-webkit-slider-thumb", "#equalizer-volume.right::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_LEFT: ["#equalizer-balance.left::-webkit-slider-thumb", "#equalizer-balance.left::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_CENTER: ["#equalizer-balance.center::-webkit-slider-thumb", "#equalizer-balance.center::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_RIGHT: ["#equalizer-balance.right::-webkit-slider-thumb", "#equalizer-balance.right::-moz-range-thumb"],
  EQ_MAXIMIZE_BUTTON_ACTIVE: ["#equalizer-shade:active"],
  EQ_MINIMIZE_BUTTON_ACTIVE: ["#equalizer-window.shade #equalizer-shade:active"],
  EQ_CLOSE_BUTTON: ["#equalizer-window.selected #equalizer-close"],
  EQ_CLOSE_BUTTON_ACTIVE: ["#equalizer-window #equalizer-close:active"],
  MAIN_POSITION_SLIDER_BACKGROUND: ["#position"],
  MAIN_POSITION_SLIDER_THUMB: ["#position::-webkit-slider-thumb", "#position::-moz-range-thumb"],
  MAIN_POSITION_SLIDER_THUMB_SELECTED: ["#position:active::-webkit-slider-thumb", "#position:active::-moz-range-thumb"],
  MAIN_SHUFFLE_BUTTON: ["#shuffle"],
  MAIN_SHUFFLE_BUTTON_DEPRESSED: ["#shuffle:active"],
  MAIN_SHUFFLE_BUTTON_SELECTED: ["#shuffle.selected"],
  MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED: ["#shuffle.selected:active"],
  MAIN_REPEAT_BUTTON: ["#repeat"],
  MAIN_REPEAT_BUTTON_DEPRESSED: ["#repeat:active"],
  MAIN_REPEAT_BUTTON_SELECTED: ["#repeat.selected"],
  MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED: ["#repeat.selected:active"],
  MAIN_EQ_BUTTON: ["#equalizer-button"],
  MAIN_EQ_BUTTON_SELECTED: ["#equalizer-button.selected"],
  MAIN_EQ_BUTTON_DEPRESSED: ["#equalizer-button:active"],
  MAIN_EQ_BUTTON_DEPRESSED_SELECTED: ["#equalizer-button.selected:active"],
  MAIN_PLAYLIST_BUTTON: ["#playlist-button"],
  MAIN_PLAYLIST_BUTTON_SELECTED: ["#playlist-button.selected"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED: ["#playlist-button:active"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED: ["#playlist-button.selected:active"],
  MAIN_TITLE_BAR: ["#title-bar"],
  MAIN_TITLE_BAR_SELECTED: [".selected #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR: [".llama #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR_SELECTED: [".llama.selected #title-bar"],
  MAIN_OPTIONS_BUTTON: [".selected #title-bar #option.clicked"],
  MAIN_OPTIONS_BUTTON_DEPRESSED: [".selected #title-bar #option:active", ".selected #title-bar #option:selected"],
  MAIN_MINIMIZE_BUTTON: [".selected #title-bar #minimize.clicked"],
  MAIN_MINIMIZE_BUTTON_DEPRESSED: [".selected #title-bar #minimize:active"],
  MAIN_SHADE_BUTTON: [".selected #title-bar #shade.clicked"],
  MAIN_SHADE_BUTTON_DEPRESSED: [".selected #title-bar #shade:active"],
  MAIN_CLOSE_BUTTON: [".selected #title-bar #close.clicked"],
  MAIN_CLOSE_BUTTON_DEPRESSED: [".selected #title-bar #close:active"],
  MAIN_CLUTTER_BAR_BACKGROUND: ["#clutter-bar"],
  MAIN_CLUTTER_BAR_BACKGROUND_DISABLED: ["#clutter-bar.disabled"],
  MAIN_CLUTTER_BAR_BUTTON_O_SELECTED: ["#button-o:active", "#button-0:selected"],
  MAIN_CLUTTER_BAR_BUTTON_A_SELECTED: ["#button-a:active", "#button-a.selected"],
  MAIN_CLUTTER_BAR_BUTTON_I_SELECTED: ["#button-i:active", "#button-i.selected"],
  MAIN_CLUTTER_BAR_BUTTON_D_SELECTED: ["#button-d:active", "#button-d.selected"],
  MAIN_CLUTTER_BAR_BUTTON_V_SELECTED: ["#button-v:active", "#button-v.selected"],
  MAIN_SHADE_BACKGROUND: [".shade #title-bar"],
  MAIN_SHADE_BACKGROUND_SELECTED: [".shade.selected #title-bar"],
  MAIN_SHADE_BUTTON_SELECTED: [".shade.selected #title-bar #shade"],
  MAIN_SHADE_BUTTON_SELECTED_DEPRESSED: [".shade #title-bar #shade:active"],
  MAIN_SHADE_POSITION_BACKGROUND: [".shade #position"],
  MAIN_SHADE_POSITION_THUMB: [".shade #position::-moz-range-thumb", ".shade #position::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_LEFT: [".shade #position.left::-moz-range-thumb", ".shade #position.left::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_RIGHT: [".shade #position.right::-moz-range-thumb", ".shade #position.right::-webkit-slider-thumb"],
  MAIN_VOLUME_BACKGROUND: ["#volume"],
  MAIN_VOLUME_THUMB: ["#volume input::-webkit-slider-thumb", "#volume input::-moz-range-thumb"],
  MAIN_VOLUME_THUMB_SELECTED: ["#volume input::-webkit-slider-thumb:active", "#volume input::-moz-range-thumb:active"],
  GEN_TOP_CENTER_FILL: [".gen-window .gen-top"],
  GEN_TOP_LEFT: [".gen-window .gen-top-left"],
  GEN_TOP_LEFT_END: [".gen-window .gen-top-left-end"],
  GEN_TOP_RIGHT: [".gen-window .gen-top-right"],
  GEN_TOP_RIGHT_END: [".gen-window .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL: [".gen-window .gen-top-left-fill", ".gen-window .gen-top-right-fill"],

  GEN_TOP_CENTER_FILL_SELECTED: [".gen-window.selected .gen-top"],
  GEN_TOP_LEFT_SELECTED: [".gen-window.selected .gen-top-left"],
  GEN_TOP_LEFT_END_SELECTED: [".gen-window.selected .gen-top-left-end"],
  GEN_TOP_RIGHT_SELECTED: [".gen-window.selected .gen-top-right"],
  GEN_TOP_RIGHT_END_SELECTED: [".gen-window.selected .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL_SELECTED: [".gen-window.selected .gen-top-left-fill", ".gen-window.selected .gen-top-right-fill"],
  GEN_BOTTOM_LEFT: [".gen-window .gen-bottom-left"],
  GEN_BOTTOM_RIGHT: [".gen-window .gen-bottom-right"],
  GEN_BOTTOM_FILL: [".gen-window .gen-bottom"],
  GEN_MIDDLE_LEFT: [".gen-window .gen-middle-left"],
  GEN_MIDDLE_LEFT_BOTTOM: [".gen-window .gen-middle-left-bottom"],
  GEN_MIDDLE_RIGHT: [".gen-window .gen-middle-right"],
  GEN_MIDDLE_RIGHT_BOTTOM: [".gen-window .gen-middle-right-bottom"],
  GEN_CLOSE_SELECTED: [".gen-window .gen-close:active"]
};

(0, _keys2.default)(_skinSprites.FONT_LOOKUP).forEach(character => {
  const key = (0, _skinSprites.imageConstFromChar)(character);
  const code = character.charCodeAt(0);
  imageSelectors[key] = [`.character-${code}`];
});

_constants.LETTERS.forEach(character => {
  imageSelectors[`GEN_TEXT_${character}`] = [`.gen-text-${character.toLowerCase()}`];
  imageSelectors[`GEN_TEXT_SELECTED_${character}`] = [`.gen-window.selected .gen-text-${character.toLowerCase()}`];
});

const cursorSelectors = exports.cursorSelectors = {
  CLOSE: ["#title-bar #close"],
  EQSLID: ["#equalizer-window .band"],
  EQNORMAL: ["#equalizer-window"],
  EQCLOSE: ["#equalizer-window #equalizer-close"],
  EQTITLE: ["#equalizer-window .title-bar", "#equalizer-window.shade", "#equalizer-window.shade input"],
  MAINMENU: ["#main-window #option"],
  MIN: ["#main-window #minimize"],
  NORMAL: [
  // Use this as the default cursor.
  ".window", "#main-window", "#main-window.shade #title-bar"],
  MMENU: ["#main-window.shade #option"],
  PNORMAL: ["#playlist-window"],
  // TODO: This is should really only apply to the top part of the top.
  // The chrome around the playlist window is larger than others. The
  // cursor only applies to the same height as the other window's chrome.
  PTBAR: ["#playlist-window .playlist-top"],
  PCLOSE: ["#playlist-window #playlist-close-button", "#playlist-window-shade #playlist-close-button"],
  PWINBUT: ["#playlist-window #playlist-shade-button", "#playlist-window-shade #playlist-shade-button"],
  POSBAR: ["#main-window #position"],
  PSIZE: ["#playlist-window #playlist-resize-target"],
  PWSSIZE: ["#playlist-window-shade #playlist-resize-target"],
  PWSNORM: ["#playlist-window-shade"],
  // TODO: The target for this is not quite right.
  PVSCROLL: ["#playlist-window .playlist-scrollbar"],
  SONGNAME: ["#main-window #marquee"],
  TITLEBAR: ["#main-window #title-bar"],
  VOLBAL: ["#volume", "#balance"],
  WINBUT: ["#main-window #shade"],
  WSNORMAL: ["#main-window.shade #title-bar"],
  WSPOSBAR: ["#main-window.shade #position"]
};

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(325);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./webamp.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./webamp.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "/* Rules used by all windows */\n\n/* Prevent accidental highlighting */\ncanvas {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n}\n\n/* Range input css reset */\n#webamp input[type=\"range\"] {\n    -webkit-appearance: none;\n    margin: 0;\n    padding: 0;\n    background: none;\n    border: none;\n}\n#webamp input[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    border: none;\n    border-radius: 0;\n    background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-thumb {\n    border: none;\n    border-radius: 0;\n    background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-track {\n    border: none;\n    background: none;\n}\n#webamp input[type=\"range\"]:focus {\n    outline: none;\n}\n#webamp input[type=\"range\"]::-moz-focus-outer {\n    border: 0;\n}\n\n#webamp a:focus {\n    outline: none;\n}\n\n/* Animation */\n@keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@-webkit-keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n#webamp .character {\n    display: inline-block;\n    vertical-align: top;\n    width: 5px;\n    height: 6px;\n    /* background-image: TEXT.BMP via Javascript */\n    text-indent: -9999px;\n}\n\n#webamp .window {\n    position: absolute;\n    /* Ask the browser to scale showing large pixels if possible */\n    image-rendering: -moz-crisp-edges; /* Firefox */\n    image-rendering: -o-crisp-edges; /* Opera */\n    image-rendering: -webkit-optimize-contrast; /* Safari */\n    image-rendering: pixelated; /* Only in Chrome > 40 */\n    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp .window {\n    /* Work around rendering bug with clip-path */\n    -webkit-transform: translateZ(0);\n}\n#webamp .window.doubled {\n    -moz-transform: translateZ(0) scale(2);\n    -moz-transform-origin: top left;\n    -webkit-transform: translateZ(0) scale(2);\n    -webkit-transform-origin: top left;\n}\n", ""]);

// exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dispatch) {
  let keylog = [];
  const trigger = [78, // N
  85, // U
  76, // L
  76, // L
  83, // S
  79, // O
  70, // F
  84 // T
  ];
  document.addEventListener("keydown", e => {
    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 68:
          // CTRL+D
          dispatch((0, _actionCreators.toggleDoubleSizeMode)());
          e.preventDefault(); // Supress the "Bookmark" action on windows.
          break;
        case 76:
          // CTRL+L FIXME
          break;
        case 82:
          // CTRL+R
          dispatch((0, _actionCreators.reverseList)());
          break;
        case 84:
          // CTRL+T
          dispatch({ type: _actionTypes.TOGGLE_TIME_MODE });
          break;
      }
    } else if (e.altKey) {
      switch (e.keyCode) {
        case 87:
          // ALT+W
          dispatch((0, _actionCreators.toggleWindow)("main"));
          break;
        case 69:
          // ALT+E
          dispatch((0, _actionCreators.toggleWindow)("playlist"));
          break;
        case 71:
          // ALT+G
          dispatch((0, _actionCreators.toggleWindow)("equalizer"));
          break;
      }
    } else {
      switch (e.keyCode) {
        case 37:
          // left arrow
          dispatch((0, _actionCreators.seekBackward)(5));
          break;
        case 38:
          // up arrow
          dispatch((0, _actionCreators.adjustVolume)(1));
          break;
        case 39:
          // right arrow
          dispatch((0, _actionCreators.seekForward)(5));
          break;
        case 40:
          // down arrow
          dispatch((0, _actionCreators.adjustVolume)(-1));
          break;
        case 66:
          // B
          dispatch((0, _actionCreators.next)());
          break;
        case 67:
          // C
          dispatch((0, _actionCreators.pause)());
          break;
        case 76:
          // L
          dispatch((0, _actionCreators.openMediaFileDialog)());
          break;
        case 82:
          // R
          dispatch((0, _actionCreators.toggleRepeat)());
          break;
        case 83:
          // S
          dispatch((0, _actionCreators.toggleShuffle)());
          break;
        case 86:
          // V
          dispatch((0, _actionCreators.stop)());
          break;
        case 88:
          // X
          dispatch((0, _actionCreators.play)());
          break;
        case 90:
          // Z
          dispatch((0, _actionCreators.previous)());
          break;
        case 96:
          // numpad 0
          dispatch((0, _actionCreators.openMediaFileDialog)());
          break;
        case 97:
          // numpad 1
          dispatch((0, _actionCreators.nextN)(-10));
          break;
        case 98:
          // numpad 2
          dispatch((0, _actionCreators.adjustVolume)(-1));
          break;
        case 99:
          // numpad 3
          dispatch((0, _actionCreators.nextN)(10));
          break;
        case 100:
          // numpad 4
          dispatch((0, _actionCreators.previous)());
          break;
        case 101:
          // numpad 5
          dispatch((0, _actionCreators.play)());
          break;
        case 102:
          // numpad 6
          dispatch((0, _actionCreators.next)());
          break;
        case 103:
          // numpad 7
          dispatch((0, _actionCreators.seekBackward)(5));
          break;
        case 104:
          // numpad 8
          dispatch((0, _actionCreators.adjustVolume)(1));
          break;
        case 105:
          // numpad 9
          dispatch((0, _actionCreators.seekForward)(5));
          break;
      }
    }

    // Easter Egg

    // Ignore escape. Usually this gets swallowed by the browser, but not always.
    if (e.keyCode !== 27) {
      keylog.push(e.keyCode);
      keylog = keylog.slice(-8);
      if ((0, _utils.arraysAreEqual)(keylog, trigger)) {
        dispatch({ type: _actionTypes.TOGGLE_LLAMA_MODE });
      }
    }
  });
};

var _actionCreators = __webpack_require__(2);

var _actionTypes = __webpack_require__(3);

var _utils = __webpack_require__(9);

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(5);

var _emitter = __webpack_require__(82);

var _emitter2 = _interopRequireDefault(_emitter);

var _elementSource = __webpack_require__(328);

var _elementSource2 = _interopRequireDefault(_elementSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import detectChannels from "./detectChannels";

class Media {
  constructor() {
    this._emitter = new _emitter2.default();
    this._context = new (window.AudioContext || window.webkitAudioContext)();
    // Fix for iOS and Chrome (Canary) which require that the context be created
    // or resumed by a user interaction.
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    // https://gist.github.com/laziel/7aefabe99ee57b16081c
    // Via: https://stackoverflow.com/a/43395068/1263117
    if (this._context.state === "suspended") {
      const resume = async () => {
        await this._context.resume();

        if (this._context.state === "running") {
          document.body.removeEventListener("touchend", resume, false);
          document.body.removeEventListener("click", resume, false);
          document.body.removeEventListener("keydown", resume, false);
        }
      };

      document.body.addEventListener("touchend", resume, false);
      document.body.addEventListener("click", resume, false);
      document.body.addEventListener("keydown", resume, false);
    }
    // We don't currently know how many channels
    this._channels = null;
    this._balance = 0;

    // The _source node has to be recreated each time it's stopped or
    // paused, so we don't create it here. Instead we create this dummy
    // node wich the real source will connect to.

    // TODO: Maybe we can get rid of this now that we are using AudioAbstraction?
    this._staticSource = this._context.createAnalyser(); // Just a noop node

    // Create the preamp node
    this._preamp = this._context.createGain();

    // Create the spliter node
    this._chanSplit = this._context.createChannelSplitter(2);

    // Create the gains for left and right
    this._leftGain = this._context.createGain();
    this._rightGain = this._context.createGain();

    // Create channel merge
    this._chanMerge = this._context.createChannelMerger(2);

    // Create the analyser node for the visualizer
    this._analyser = this._context.createAnalyser();
    this._analyser.fftSize = 2048;
    // TODO: Tune these to something that looks like Winamp
    this._analyser.minDecibels = -90;
    this._analyser.maxDecibels = -10;
    this._analyser.smoothingTimeConstant = 0.8;

    // Create the gain node for the volume control
    this._gainNode = this._context.createGain();

    // Connect all the nodes in the correct way
    // (Note, source is created and connected later)
    //
    //                <source>
    //                    |
    //                    |_____________
    //                    |             \
    //                <preamp>          |
    //                    |             | <-- Optional bypass
    //           [...biquadFilters]     |
    //                    |_____________/
    //                    |
    //    (split using createChannelSplitter)
    //                    |
    //                   / \
    //                  /   \
    //          <leftGain><rightGain>
    //                  \   /
    //                   \ /
    //                    |
    //     (merge using createChannelMerger)
    //                    |
    //               <chanMerge>
    //                    |
    //                    |\
    //                    | <analyser>
    //                  <gain>
    //                    |
    //              <destination>

    this._source = new _elementSource2.default(this._context, this._staticSource);

    this._source.on("positionChange", () => {
      this._emitter.trigger("timeupdate");
    });
    this._source.on("ended", () => {
      this._emitter.trigger("ended");
    });
    this._source.on("statusChange", () => {
      switch (this._source.getStatus()) {
        case "PLAYING":
          this._emitter.trigger("playing");
          break;
      }
      this._emitter.trigger("timeupdate");
    });
    this._source.on("loaded", () => {
      this._emitter.trigger("fileLoaded");
    });

    this._staticSource.connect(this._preamp);

    let output = this._preamp;
    this.bands = {};

    _constants.BANDS.forEach((band, i) => {
      const filter = this._context.createBiquadFilter();

      this.bands[band] = filter;

      if (i === 0) {
        // The first filter, includes all lower frequencies
        filter.type = "lowshelf";
      } else if (i === band.length - 1) {
        // The last filter, includes all higher frequencies
        filter.type = "highshelf";
      } else {
        filter.type = "peaking";
      }
      filter.frequency.value = band;
      filter.gain.value = 0;

      output.connect(filter);
      output = filter;
    });

    output.connect(this._chanSplit);

    // Connect split channels to left / right gains
    this._chanSplit.connect(this._leftGain, 0);
    this._chanSplit.connect(this._rightGain, 1);

    // Reconnect the left / right gains to the merge node
    this._leftGain.connect(this._chanMerge, 0, 0);
    this._rightGain.connect(this._chanMerge, 0, 1);

    this._chanMerge.connect(this._gainNode);
    this._chanMerge.connect(this._analyser);

    this._gainNode.connect(this._context.destination);
    window.media = this;
  }

  _setChannels(num) {
    const assumedChannels = num == null ? 2 : num;
    this._chanSplit.disconnect();
    this._chanSplit.connect(this._leftGain, 0);
    // If we only have one channel, use it for both left and right.
    this._chanSplit.connect(this._rightGain, assumedChannels === 1 ? 0 : 1);
    this._channels = num;
    this._emitter.trigger("channelupdate");
  }

  /* Properties */
  duration() {
    return this._source.getDuration();
  }

  timeElapsed() {
    return this._source.getTimeElapsed();
  }

  timeRemaining() {
    return this.duration() - this.timeElapsed();
  }

  percentComplete() {
    return this.timeElapsed() / this.duration() * 100;
  }

  channels() {
    return this._channels == null ? 2 : this._channels;
  }

  sampleRate() {
    return this._source.getSampleRate();
  }

  /* Actions */
  async play() {
    await this._source.play();
    if (this._channels == null) {
      // Temporarily disabled https://github.com/captbaritone/webamp/issues/551
      /*
      detectChannels(this._staticSource)
        .then(channels => {
          this._setChannels(channels);
        })
        .catch(() => {
          this._setChannels(null);
        });
      */
    }
  }

  pause() {
    this._source.pause();
  }

  stop() {
    this._source.stop();
  }

  /* Actions with arguments */
  seekToPercentComplete(percent) {
    const seekTime = this.duration() * (percent / 100);
    this.seekToTime(seekTime);
  }

  // From 0-1
  setVolume(volume) {
    this._gainNode.gain.value = volume / 100;
  }

  // From 0-1
  setPreamp(value) {
    this._preamp.gain.value = value / 100;
  }

  // From -100 to 100
  setBalance(balance) {
    let changeVal = Math.abs(balance) / 100;

    // Hack for Firefox. Having either channel set to 0 seems to revert us
    // to equal balance.
    changeVal = changeVal - 0.00000001;

    if (balance > 0) {
      // Right
      this._leftGain.gain.value = 1 - changeVal;
      this._rightGain.gain.value = 1;
    } else if (balance < 0) {
      // Left
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1 - changeVal;
    } else {
      // Center
      this._leftGain.gain.value = 1;
      this._rightGain.gain.value = 1;
    }
    this._balance = balance;
  }

  setEqBand(band, value) {
    const db = value / 100 * 24 - 12;
    this.bands[band].gain.value = db;
  }

  disableEq() {
    this._staticSource.disconnect();
    this._staticSource.connect(this._chanSplit);
  }

  enableEq() {
    this._staticSource.disconnect();
    this._staticSource.connect(this._preamp);
  }

  /* Listeners */
  on(event, callback) {
    this._emitter.on(event, callback);
  }

  seekToTime(time) {
    this._source.seekToTime(time);
  }

  // Used only for the initial load, since it must have a CORS header
  async loadFromUrl(url, autoPlay) {
    this._emitter.trigger("waiting");
    await this._source.loadUrl(url);
    this._setChannels(null);
    this._emitter.trigger("stopWaiting");
    if (autoPlay) {
      this.play();
    }
  }
}
exports.default = Media; /* Emulate the native <audio> element with Web Audio API */

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = __webpack_require__(82);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STATUS = {
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  PAUSED: "PAUSED"
};

class ElementSource {
  on(eventType, cb) {
    return this._emitter.on(eventType, cb);
  }

  constructor(context, destination) {
    this._emitter = new _emitter2.default();
    this._context = context;
    this._destination = destination;
    this._audio = document.createElement("audio");
    this._audio.crossOrigin = "anonymous";
    this._stalled = false;
    this._status = STATUS.STOPPED;

    this._audio.addEventListener("suspend", () => {
      this._setStalled(true);
    });

    this._audio.addEventListener("durationchange", () => {
      this._emitter.trigger("loaded");
      this._setStalled(false);
    });

    this._audio.addEventListener("ended", () => {
      this._emitter.trigger("ended");
      this._setStatus(STATUS.STOPPED);
    });

    // TODO: Throttle to 50 (if needed)
    this._audio.addEventListener("timeupdate", () => {
      this._emitter.trigger("positionChange");
    });

    this._audio.addEventListener("error", e => {
      switch (this._audio.error.code) {
        case 1:
          // The fetching of the associated resource was aborted by the user's request.
          console.error("MEDIA_ERR_ABORTED", e);
          break;
        case 2:
          console.error("MEDIA_ERR_NETWORK", e);
          // Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.
          break;
        case 3:
          // Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.

          // There is a bug in Chrome where improperly terminated mp3s can cuase this error.
          // https://bugs.chromium.org/p/chromium/issues/detail?id=794782
          // Related: Commit f44e826c83c74fef04c2c448af30cfb353b28312
          console.error("PIPELINE_ERROR_DECODE", e);
          break;
        case 4:
          console.error("MEDIA_ERR_SRC_NOT_SUPPORTED", e);
          // The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.
          break;
      }
      // Rather than just geting stuck in this error state, we can just pretend this is
      // the end of the track.

      this._emitter.trigger("ended");
      this._setStatus(STATUS.STOPPED);
    });

    this._source = this._context.createMediaElementSource(this._audio);
    this._source.connect(destination);
  }

  _setStalled(stalled) {
    this._stalled = stalled;
    this._emitter.trigger("stallChanged");
  }

  disconnect() {
    this._source.disconnect();
  }

  // Async for now, for compatibility with BufferAudioSource
  // TODO: This does not need to be async
  async loadUrl(url) {
    this._audio.src = url;
  }

  async play() {
    if (this._status !== STATUS.PAUSED) {
      this.seekToTime(0);
    }
    try {
      await this._audio.play();
    } catch (err) {
      //
    }
    this._setStatus(STATUS.PLAYING);
  }

  pause() {
    this._audio.pause();
    this._setStatus(STATUS.PAUSED);
  }

  stop() {
    this._audio.pause();
    this._audio.currentTime = 0;
    this._setStatus(STATUS.STOPPED);
  }

  seekToTime(time) {
    // Make sure we are within range
    // TODO: Use clamp
    time = Math.min(time, this.getDuration());
    time = Math.max(time, 0);
    this._audio.currentTime = time;
    this._emitter.trigger("positionChange");
  }

  getStalled() {
    return this._stalled;
  }

  getStatus() {
    return this._status;
  }

  getDuration() {
    const duration = this._audio.duration;
    // Safari on iOS currently has a strange behavior where it reports
    // the duration as infinity if an Accept-Ranges header is not returned.
    // For now, 0 is better even though it's still wrong.

    return isNaN(duration) || duration === Infinity ? 0 : duration;
  }

  getTimeElapsed() {
    return this._audio.currentTime;
  }

  getNumberOfChannels() {
    return this._source.channelCount;
  }

  getSampleRate() {
    // This is a lie. This is the sample rate of the context, not the
    // underlying source media.
    return this._context.sampleRate;
  }

  _setStatus(status) {
    this._status = status;
    this._emitter.trigger("statusChange");
  }
}
exports.default = ElementSource;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(24)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./base-skin.min.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./base-skin.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module

// exports


/***/ })
/******/ ]);
});