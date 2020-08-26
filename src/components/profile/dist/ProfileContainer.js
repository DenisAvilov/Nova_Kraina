"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Profile_1 = require("./Profile");
var profile_reduce_1 = require("../../redux/profile-reduce");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var withAuthRedirect_1 = require("../hoc/withAuthRedirect");
var redux_1 = require("redux");
var selector_redux_1 = require("../../redux/selector-redux");
var ProfileConteiner = /** @class */ (function (_super) {
    __extends(ProfileConteiner, _super);
    function ProfileConteiner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.submit = function (values) {
            var addPost = _this.props.addPost;
            addPost(values.writeNewPost);
        };
        return _this;
    }
    ProfileConteiner.prototype.drawComponent = function () {
        var _a = this.props, setUsers = _a.setUsers, match = _a.match, generalId = _a.generalId;
        var userProfileId = null;
        if (isFinite(match.params.userId)) {
            userProfileId = match.params.userId;
        }
        else {
            userProfileId = generalId;
        }
        setUsers(userProfileId);
    };
    ProfileConteiner.prototype.componentDidMount = function () {
        this.drawComponent();
    };
    ProfileConteiner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.drawComponent();
        }
        var match = this.props.match;
        //I mast fix this bug
        this.isMyPage = !isFinite(match.params.userId);
    };
    ProfileConteiner.prototype.render = function () {
        var _a = this.props, emailUser = _a.emailUser, statusСhangedSuccess = _a.statusСhangedSuccess, saveFoto = _a.saveFoto, photoUser = _a.photoUser, status = _a.status;
        return React.createElement(Profile_1["default"], __assign({}, this.props, { onSubmit: this.submit, status: status, "status\u0421hangedSuccess": statusСhangedSuccess, isMyPage: this.isMyPage, saveFoto: saveFoto, emailUser: emailUser, photoUser: photoUser }));
    };
    return ProfileConteiner;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        post: selector_redux_1.getPost(state),
        status: state.profile.status,
        brief: selector_redux_1.getBrief(state),
        placeholder: selector_redux_1.getPlaceholder(state),
        profile: selector_redux_1.getProfile(state),
        generalId: selector_redux_1.getOwnUserId(state),
        emailUser: selector_redux_1.emailUser(state),
        photoUser: state.general.photo,
        totalCountFriend: selector_redux_1.getTotalCountFriend(state)
    };
};
exports["default"] = redux_1.compose(react_router_dom_1.withRouter, withAuthRedirect_1.withAuthRedirect, react_redux_1.connect(mapStateToProps, { addPost: profile_reduce_1.addPost, setUsers: profile_reduce_1.setUsers, statusСhangedSuccess: profile_reduce_1.statusСhangedSuccess, saveFoto: profile_reduce_1.saveFoto }))(ProfileConteiner);
