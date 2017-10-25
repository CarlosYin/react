/*
*
*   文件简介:用于处理按量更新js
*   作者:carlosYin
*   更新时间:2017-10-24 14:34:49
*
*
*/
import React, { Component } from 'react'
export default class Bundle extends React.Component {
    componentWillMount() {
        this.load(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        if (!this.state.mod)
            return false
        return this.props.children(this.state.mod)
    }
}