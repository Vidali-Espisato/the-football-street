import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { NavOptions } from '../constants/NavConstants'
import Article from './Article'
import PageLayout from './PageLayout'


function Routes(props) {
    const { mobileView } = props
    // const match = useRouteMatch()
    const routes = []
    
    NavOptions.forEach(item => {
        if (item.subItems) {
            item.subItems.forEach(subItem => {
                routes.push(
                    <Route path={ subItem.path }>
                        <PageLayout item={ subItem } mobileView={ mobileView }/> 
                    </Route>
                )
            })
            routes.push(
                <Redirect exact from={ item.path } to={ item.subItems[0].path } />
            )  
        } else {
            routes.push(
                <Route key={ item.key } path={ item.path }>
                    <PageLayout item={ item } mobileView={ mobileView }/> 
                </Route>
            )
        }
    })


    return (
        <Switch>
            { routes }
            <Route path="/article">
                <Article mobileView={ mobileView }/>
            </Route>
            <Redirect to={ NavOptions[0].path }/>
        </Switch>
    )
}

export default Routes
