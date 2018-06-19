import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';


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
            return(<div className={'galleryElement col-sm'}> <NavLink to={'/shop/'+this.props.name}>
               <img  src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.name}</p></NavLink>
            </div>);
    };
}

class Gallery extends Component{
    render() {
        let list = SliderElements.map((element, index)=>{
            return <GalleryElement key ={index} name={element.name} image={element.imageName}/>;
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
                <h2 style={{fontSize: '6rem', fontWeight: '700', letterSpacing: '0.5rem'}}><span style={{color: '#9c2562'}}>I</span><span style={{color: '#ef5a2e'}}>K</span><span style={{color: '#2fa8e0'}}>A</span></h2>
                <h2 style={{color: 'white', fontSize: '3rem', borderTop: '10px solid white'}}>POLSKA</h2>
                <h2 style={{color: 'white', fontSize: '3rem', fontWeight: '700', textAlign: 'center'}}>Twoj partner w biznesie</h2>
            </div>
        );
    }
}

class Info extends Component{

    render() {
        return (
            <div className={'blog row'}>
                <h2>Aktualności</h2>

                    <NavLink to={'/blog/:id'}>
                            <div className={'col-md'}>
                            <p className={'theme'}>Temat</p>
                            <p className={'date'}>dodano 15.11.2018</p>
                            <p className={'message'}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at deserunt enim incidunt odio!
                                    Beatae doloribus eligendi eum eveniet, hic impedit maiores maxime, odit, omnis optio quis repellat repellendus temporibus.</span>
                            </p>
                         </div>
                    </NavLink>


                    <NavLink to={'/blog/:id'}>
                        <div className={'col-md'}>
                            <p className={'theme'}>Temat</p>
                            <p className={'date'}>dodano 15.11.2018</p>
                            <p className={'message'}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at deserunt enim incidunt odio!
                                    Beatae doloribus eligendi eum eveniet, hic impedit maiores maxime, odit, omnis optio quis repellat repellendus temporibus.</span>
                            </p>
                        </div>
                    </NavLink>

            </div>
        );
    }

}
class Main extends Component{

    render() {
        return (
            <div className={'mainContent'}>
                <ImageJumbotron/>
                <Gallery/>
                <Info/>
            </div>
        );
    }

};

export default Main;