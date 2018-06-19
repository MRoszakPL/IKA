import React, { Component } from 'react';


const SliderElements = [
    {   imageName: 'master.jpg',
        name: 'master'
    },
    {   imageName: 'morana.jpg',
        name: 'morana'
    },
    {   imageName: 'opakowania.jpg',
        name: 'opakowania'
    },
    {   imageName: 'artykulyhigieniczne.jpg',
        name: 'artykuły higieniczne'
    },
    {   imageName: 'gloves.jpg',
        name: 'Rękawiczki'
    },
    {   imageName: 'professionalCleaning.jpg',
        name: 'Profesjonalne sprzątanie'
    },
];


class GalleryElement extends Component{

    render() {
            return(<div className={'galleryElement col-sm'}>
                <img  src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.name}</p>
            </div>)
    }
}

class Gallery extends Component{

    render() {
        let list = SliderElements.map((element, index)=>{
            return <GalleryElement key ={index} name={element.name} image={element.imageName}/>;
        })
        return (
            <div className={'row'}>
                {list}
            </div>);
    }
}

class ImageJumbotron extends Component{

    render() {
        return (
            <div className={'jumbotron'}>
                <h2 style={{fontSize: '6rem', fontWeight: '700', letterSpacing: '0.5rem'}}><span style={{color: '#9c2562'}}>I</span><span style={{color: '#ef5a2e'}}>K</span><span style={{color: '#2fa8e0'}}>A</span></h2>
                <h2 style={{color: 'white', fontSize: '3rem', borderTop: '10px solid white'}}>POLSKA</h2>
                <h2 style={{color: 'white', fontSize: '3rem', fontWeight: '700'}}>Twoj partner w biznesie</h2>
            </div>
        );
    }
}

class Info extends Component{

    render() {
        return (
            <div>

            </div>
        );
    }

}
class Main extends Component{

    render() {
        return (
            <div className={'mainContent'}>
                    <ImageJumbotron/>
                <div className={'gallery'}>
                    <Gallery/>
                </div>
                <div className={'blog'}>
                    <Info/>
                </div>
            </div>
        );
    }

};

export default Main;