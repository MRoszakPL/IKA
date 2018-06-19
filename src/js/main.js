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


class SliderElement extends Component{

    render() {
        return (this.props.hidden) ?
            (<div className={'sliderElement hidden'}>
                <img src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.name}</p>
            </div>) : (
            <div className={'sliderElement'}>
                <img src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.name}</p>
            </div>)
    }
}

class Slider extends Component{

    render() {
        let list = SliderElements.map((element, index)=>{
            return (index>3) ? <SliderElement hidden = {true} key ={index} name={element.name} image={element.imageName}/> : <SliderElement key ={index} name={element.name} image={element.imageName}/>  ;
        })
        return (
            <div className={'slider'}>
                <button> &#60; </button>
                {list}
                <button> &#62; </button>
            </div>
        );
    }
}

class ImageJumbotron extends Component{

    render() {
        return (
            <div className={'jumbotron'}>
                <h2 style={{fontSize: '5rem', fontWeight: '700', letterSpacing: '1rem'}}><span style={{color: '#9c2562'}}>I</span><span style={{color: '#ef5a2e'}}>K</span><span style={{color: '#2fa8e0'}}>A</span></h2>
                <h2 style={{color: 'gray', fontSize: '3rem', borderTop: '10px solid gray'}}>POLSKA</h2>
                <h2 style={{color: 'black', fontSize: '3rem', fontWeight: '700'}}>Twoj partner w biznesie</h2>
            </div>
        );
    }
}

class Main extends Component{

    render() {
        return (
            <div className={'mainContent'}>
                    <ImageJumbotron/>
                <div className={'container'}>
                    <Slider/>
                </div>
            </div>
        );
    }

};

export default Main;