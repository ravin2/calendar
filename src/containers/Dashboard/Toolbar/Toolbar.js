import PropTypes from 'prop-types'
import React , { useState } from 'react'
import clsx from 'clsx'
import { navigate } from '../../utils/constants'
import Image from 'react-bootstrap/Image'
import Header from '../../../components/Header/index';
import "./toolbar.css";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Toolbar extends React.Component {
  render() {
    
        
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className="toolbar">
          
          <span className="logo">                
            <Image  src={require('../../../ASSETS/logo-head1.png')} fluid />   
          </span>
        <span className="rbc-toolbar">
          
            <span className="rbc-btn-group">
            <button className="back-btn"
                type="button"
                onClick={this.navigate.bind(null, navigate.PREVIOUS)}
              >
                &lt;          
            </button>
              <button className="back-btn"
                type="button"
                onClick={this.navigate.bind(null, navigate.TODAY)}
              >
                {messages.today}
              </button>
              <button className="back-btn"
                type="button"
                onClick={this.navigate.bind(null, navigate.NEXT)}
              >
                {">"}
              </button>
            </span>

            <span className="rbc-label">{label}</span>
            <span className="btn-group">{this.viewNamesGroup(messages)}</span>
            
          </span>
          <span className='profile'>
                <Header/>
          </span>
      </div>
      
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={clsx({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}


Toolbar.propTypes = {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
}

export default Toolbar


