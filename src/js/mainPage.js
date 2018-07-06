import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';


const SliderElements = [
    {   imageName: 'master.jpg',
        name: 'master',
        plName: 'Master'
    },
    {   imageName: 'morana.jpg',
        name: 'morana',
        plName: 'Morana'
    },
    {   imageName: 'opakowania.jpg',
        name: 'package',
        plName: 'Opakowania'
    },
    {   imageName: 'reklamowki.jpg',
        name: 'bags',
        plName: 'Reklamówki'
    },
    {   imageName: 'artykulyhigieniczne.jpg',
        name: 'hygienicArticles',
        plName: 'Artykuły higieniczne'
    },
    {   imageName: 'gloves.jpg',
        name: 'gloves',
        plName: 'Rękawiczki'
    },
    {   imageName: 'professionalCleaning.jpg',
        name: 'professionalCleaning',
        plName: 'Profesjonalne sprzątanie'
    }
];

class GalleryElement extends Component{

    render() {
        if(!this.props.last){
            return(<NavLink  className={'galleryElement col-md-3'} to={'/shop/'+this.props.name}>
                <img  src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.plName}</p>
            </NavLink>);
        } else {
            return(<NavLink  className={'galleryElement col-md-10'} to={'/shop/'+this.props.name}>
                <img  src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.plName}</p>
            </NavLink>);
        }

    };
}

class Gallery extends Component{
    render() {
        let list = SliderElements.map((element, index)=>{
            if(index!==SliderElements.length-1){
                return  <GalleryElement key ={index} last={false} name={element.name} plName={element.plName} image={element.imageName}/>
            } else {
                return  <GalleryElement key ={index} last ={true} name={element.name} plName={element.plName} image={element.imageName}/>
            }
        });
        return (
            <div className={'gallery'}>
                <div className={'row'}>
                    {list}
                </div>
            </div>);

    };
}

class ImageJumbotron extends Component{

    render() {
        return (
            <div className={'jumbotron'}>
                <h2 style={{fontSize: '20rem', fontWeight: '700', letterSpacing: '0.5rem'}}><span style={{color: '#9c2562'}}>I</span><span style={{color: '#ef5a2e'}}>K</span><span style={{color: '#2fa8e0'}}>A</span></h2>
                <h2 style={{color: 'white', fontSize: '9rem', borderTop: '10px solid white'}}>POLSKA</h2>
                <h2 style={{color: 'white', fontSize: '3rem', fontWeight: '700', textAlign: 'center'}}>Twoj partner w biznesie</h2>
            </div>
        );
    }
}

class MainPage extends Component{

    render() {
        return (
            <div className={'mainContent'}>
                <ImageJumbotron/>
                <Gallery/>
            </div>
        );
    }

}

export default MainPage;