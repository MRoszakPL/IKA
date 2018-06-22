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
    },
];

class GalleryElement extends Component{

    render() {
            return(<div className={'galleryElement col-sm-3'}> <NavLink to={'/shop/'+this.props.name}>
               <img  src={`./images/${this.props.image}`} alt={this.props.name}/>
                <p>{this.props.plName}</p></NavLink>
            </div>);
    };
}

class Gallery extends Component{
    render() {
        let list = SliderElements.map((element, index)=>{
            return <GalleryElement key ={index} name={element.name} plName={element.plName} image={element.imageName}/>;
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

// class Info extends Component{
//
//     render() {
//         return (
//             <div className={'blog row'}>
//                 <h2>Aktualności... <span>co u nas słychać</span></h2>
//
//                     <NavLink to={'/blog/1'}>
//                             <div className={'col-md'}>
//                             <p className={'theme'}>Temat</p>
//                             <p className={'date'}>dodano 15.11.2018</p>
//                             <p className={'message'}>
//                                 <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at deserunt enim incidunt odio!
//                                     Beatae doloribus eligendi eum eveniet, hic impedit maiores maxime, odit, omnis optio quis repellat repellendus temporibus.</span>
//                             </p>
//                          </div>
//                     </NavLink>
//
//
//                     <NavLink to={'/blog/2'}>
//                         <div className={'col-md'}>
//                             <p className={'theme'}>Temat</p>
//                             <p className={'date'}>dodano 15.11.2018</p>
//                             <p className={'message'}>
//                                 <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at deserunt enim incidunt odio!
//                                     Beatae doloribus eligendi eum eveniet, hic impedit maiores maxime, odit, omnis optio quis repellat repellendus temporibus.</span>
//                             </p>
//                         </div>
//                     </NavLink>
//
//             </div>
//         );
//     }
//
// }

class Main extends Component{

    render() {
        return (
            <div className={'mainContent'}>
                <ImageJumbotron/>
                <Gallery/>
                {/*<Info/>*/}
            </div>
        );
    }

}

export default Main;