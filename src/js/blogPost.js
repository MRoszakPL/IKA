import React, { Component } from 'react';



class TextContent extends Component{

    render() {
        return (
            <div className={'row'}>
                <h2>Title of secton</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti dolore dolorem dolores doloribus id mollitia non quibusdam repudiandae unde.</p>
            </div>
        );
    }

}


class ImageContent extends Component{

    render() {
        return (
            <div className={'row imageSection'} style={{backgroundImage: "url('./images/main.png')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', content: ''}}></div>
        );
    }

}


class PostMainImage extends Component{

    render() {
        return (
            <div className={'row imageSection'} style={{backgroundImage: "url('./images/main.png')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', content: ''}}></div>

        );
    }

}


class Content extends Component{

    render() {
        return (
            <div className={'row'}>
                <div className={'container'}>
                    <h1>Title of blog post</h1>
                    <h5>Date: 11.11.2018</h5>
                    <TextContent />
                    <ImageContent />
                    <TextContent />
                </div>
            </div>
        );
    }

}

class BlogPost extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className={'blogPost'}>
                <PostMainImage/>
                <Content/>
            </section>
        );
    }

};

export default BlogPost;