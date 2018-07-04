import React, { Component } from 'react';



class TextContent extends Component{

    render() {
        return (
            <div className={'row'}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
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
        let partOneText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aut beatae consequuntur corporis cum debitis, delectus dolorem doloremque ducimus eaque eligendi enim esse eum exercitationem facere id incidunt ipsum itaque labore laboriosam, laborum minus nostrum odio odit officiis placeat porro provident quaerat, quas quidem rem sunt ullam unde velit vero vitae. A adipisci alias, ' +
            'amet aperiam assumenda, atque commodi cupiditate delectus dicta dignissimos dolor ea enim et fugit inventore ipsum magnam maiores molestiae necessitatibus nesciunt obcaecati officiis omnis possimus praesentium quaerat quis quisquam, quod recusandae sequi sit sunt tenetur voluptate voluptatibus! Architecto corporis eos fuga labore nihil nobis nulla odio repudiandae tempora temporibus. Ad, consectetur consequatur ' +
            'debitis delectus error hic inventore maiores modi nobis, numquam, obcaecati repudiandae soluta tempora! Consectetur deleniti dicta et excepturi';
        let partTwoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aut beatae consequuntur corporis cum debitis, delectus dolorem doloremque ducimus eaque eligendi enim esse eum exercitationem facere id incidunt ipsum itaque labore laboriosam, laborum minus nostrum odio odit officiis placeat porro provident quaerat, quas quidem rem sunt ullam unde velit vero vitae. A adipisci alias, ' +
            'amet aperiam assumenda, atque commodi cupiditate delectus dicta dignissimos dolor ea enim et fugit inventore ipsum magnam maiores molestiae necessitatibus nesciunt obcaecati officiis omnis possimus praesentium quaerat quis quisquam, quod recusandae sequi sit sunt tenetur voluptate voluptatibus! Architecto corporis eos fuga labore nihil nobis nulla odio repudiandae tempora temporibus. Ad, consectetur consequatur ' +
            'debitis delectus error hic inventore maiores modi nobis, numquam, obcaecati repudiandae soluta tempora! Consectetur deleniti dicta et excepturi,' +
            ' exercitationem illum ipsum molestiae natus obcaecati odio quos suscipit tenetur totam ut veritatis. Distinctio, quas quis? Amet assumenda eligendi officia praesentium quaerat rerum tempora temporibus unde. Adipisci amet asperiores assumenda consequatur eum harum impedit iste iure iusto mollitia neque nobis quae similique, veritatis vero. Assumenda at illo ipsam neque sed, sequi ut voluptatibus! ' +
            'A aliquam consectetur est ex exercitationem expedita id, incidunt iure laboriosam magni nihil odio perferendis quasi quia repellendus saepe unde vero voluptas?';
        return (

            <div className={'row'}>
                <div className={'container'}>
                    <h1>Title of blog post</h1>
                    <h5>Date: 11.11.2018</h5>
                    <TextContent title={'Part 1'} text={partOneText}/>
                    <ImageContent />
                    <TextContent title={'Part 2'}  text={partTwoText} />
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