"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("block-ui");
var $ = require("jquery");
var BlockElement = (function () {
    function BlockElement() {
    }
    BlockElement.configure = function () {
        // $.blockUI.defaults.message = '<i class="fa fa-spin fa-2x fa-spinner"></i>';
        Element.prototype.block = BlockElement.block;
        Element.prototype.unblock = BlockElement.unblock;
        if ($.blockUI) {
            $.blockUI.defaults.message = '';
            $.blockUI.defaults.css.border = 'none';
            $.blockUI.defaults.css.backgroundColor = 'transparent';
            $.blockUI.defaults.overlayCSS.backgroundColor = '#fff';
        }
    };
    BlockElement.block = function () {
        var element = this;
        if (element._blocked)
            return;
        element._blocked = true;
        $(element).block();
    };
    BlockElement.unblock = function () {
        var element = this;
        element._blocked = false;
        $(element).unblock();
    };
    return BlockElement;
}());
exports.BlockElement = BlockElement;
