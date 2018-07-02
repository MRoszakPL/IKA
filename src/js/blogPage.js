import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class ListOfNews extends Component{

    render() {
        let list = [];
        for(let i = 0; i<8; i++){
            if(i%2){
                list.push(<LeftImageNews key={i}/>)
            } else {
                list.push(<RightImageNews key={i}/>)
            }
        }
        return (
            <div className={'listOfNews'}>
                {list}
            </div>

        );
    }

}


class LeftImageNews extends Component{

    render() {
        return (


            <NavLink to={'/blogPost'}>
                <div className={'row blogPost'}>
                    <div className={'col-md-8'}>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Data: 27.05.2018</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi et eveniet facere facilis iste quo ullam? Autem beatae deleniti iusto libero nam nulla odit quam suscipit unde vero!</p>
                    </div>
                    <div style={{backgroundImage: "url('./images/Info.png')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className={'col-md-4'}>

                    </div>
                </div>
            </NavLink>
        );
    }

}

class RightImageNews extends Component{

    render() {
        return (
            <NavLink to={'/blogPost'}>
                <div className={'row blogPost'}>
                    <div style={{backgroundImage: "url('./images/Info.png')", backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className={'col-md-4'}>

                    </div>
                    <div className={'col-md-8'}>
                        <h1>Lorem ipsum dolor sit amett</h1>
                        <p>Data: 27.05.2018</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi et eveniet facere facilis iste quo ullam? Autem beatae deleniti iusto libero nam nulla odit quam suscipit unde vero!</p>
                    </div>
                </div>
            </NavLink>
        );
    }

}

class MainNews extends Component{

    render() {
        return (
            <NavLink to={'/blogPost'}>
                <div className={'row mainNews'}>
                    <div className={' container'}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                        <p>Data: 27.05.2018</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid autem dignissimos error
                            officia officiis reiciendis. A accusantium animi, architecto commodi dolorum ea eum hic, magnam
                            minima possimus quaerat ratione.</p>
                    </div>
                </div>
            </NavLink>
        );
    }

}


class BlogPage extends Component{

    render() {
        return (
            <section>

                    <MainNews />


                <div className={'blog container'}>

                    <ListOfNews />
                </div>
            </section>
        );
    }

};

export default BlogPage;