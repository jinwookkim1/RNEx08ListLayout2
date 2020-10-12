import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

export default class MainComponent extends Component{

    //생성자
    constructor(){        
        super();//명시적으로 super()없으면 에러

        //대량의 데이터를 멤버변수로 만들기 [ name, message, img를 property(멤버)로 가진 객체들 배열 ]
        this.state={
            datas : [
                {name:"sam", message:"Hello world", img:require('./images/moana01.jpg')},
                {name:"robin", message:"Hello RN", img:require('./images/moana02.jpg')},
                {name:"hong", message:"Hello react", img:require('./images/moana03.jpg')},
                {name:"kim", message:"Hello hybrid", img:require('./images/moana04.jpg')},
                {name:"rosa", message:"Hello ios", img:require('./images/moana05.jpg')},
                {name:"moana", message:"Hello movie", img:require('./images/moana01.jpg')},
                {name:"jack", message:"Hello tom", img:require('./images/moana02.jpg')},
                {name:"merry", message:"Hello web", img:require('./images/moana03.jpg')},
                {name:"sam", message:"Hello world", img:require('./images/moana01.jpg')},
                {name:"robin", message:"Hello RN", img:require('./images/moana02.jpg')},
                {name:"hong", message:"Hello react", img:require('./images/moana03.jpg')},
                {name:"kim", message:"Hello hybrid", img:require('./images/moana04.jpg')},
                {name:"rosa", message:"Hello ios", img:require('./images/moana05.jpg')},
                {name:"moana", message:"Hello movie", img:require('./images/moana01.jpg')},
                {name:"jack", message:"Hello tom", img:require('./images/moana02.jpg')},
                {name:"merry", message:"Hello web", img:require('./images/moana03.jpg')},                
            ]
        }
    }

    render(){

        return (
            // 대량의 데이터여서 화면의 높이를 벗어날 수 있어서 ScrollView 사용 
            <ScrollView style= { style.container }>
            {/* 대량의 데이터 배열의 요소개수 만큼 Compoent를 리턴하는 map()메소드 사용 */}
            {
                this.state.datas.map( ( element, index )=>{
                    return (                        
                        // 1. key속성이 없으면 경고문구 보여짐.. 배열요소들의 값을 구별하는 정해진 식별자 key props적용
                        <View key={ index } style={ style.item } >
                            <Image source= { element.img } style= { style.itemImg } ></Image>
                            <View style={ {flexDirection:'column'} } >
                                <Text style= { style.itemName } > { element.name } </Text>
                                <Text style= { style.itemMessage } > { element.message }</Text> 
                            </View>                            
                        </View>


                        //2. 아이템뷰를 클릭했을 때 반응하기 : 해당 아이템의 이름 출력 - onPress에 메소드만 넣으면 아이템번호를 구별할 수 없음.
                        // <TouchableOpacity key={ index } style={ style.item } onPress={ this.clickItem }>
                        //     <Image source= { element.img } style= { style.itemImg } ></Image>
                        //     <View style={ {flexDirection:'column'} } >
                        //         <Text style= { style.itemName } > { element.name } </Text>
                        //         <Text style= { style.itemMessage } > { element.message }</Text> 
                        //     </View>                            
                        // </TouchableOpacity>

                        //3. 아이템뷰를 클릭했을 때 반응하기 : 해당 아이템의 이름 출력 
                        // - onPress에 익명콜백함수를 넣고 그 곳에서 멤버메소드의 index전달
                        // <TouchableOpacity key={ index } style={ style.item } onPress={ ()=>{ this.clickItem2(index); } }>
                        //     <Image source= { element.img } style= { style.itemImg } ></Image>
                        //     <View style={ {flexDirection:'column'} } >
                        //         <Text style= { style.itemName } > { element.name } </Text>
                        //         <Text style= { style.itemMessage } > { element.message }</Text> 
                        //     </View>                            
                        // </TouchableOpacity>
                        
                    )
                })
            }
            </ScrollView>
        );

    }//render method..

    //2.실습시에 Item을 클릭했을 때 반응하기
    clickItem= ()=>{
        alert();
        //alert("index : " + index);//error : index 식별 불가
    }

    //3.실습시에 Item을 클릭했을 때 반응하기 : 파라미터로 index받기
    clickItem2= (index)=>{
        // alert("index : " + index);

        // 빽틱(` `)안에 변수명 바로 결합하기 ``안에 ${변수명}을 넣으면 변수명 구분 [ php의  " "와 유사함] 
        // - 주의! 작은 따옴표'' 아님
        alert(`name : ${this.state.datas[index].name}`);
    }

    // ListView 컴포넌트 없이 리스트뷰의 형태를 잘 만든 듯 하지만, 데이터가 많을 때는 문제가 있음.
    // 데이터(배열)의 개수가 매우 많을 때에 화면에 보이지도 않는 컴포넌트들이 무조건 만들어져 있음.
    // 예를 들어 배열 데이터 안에 데이터의 수가 100개라면 보여지는 개수와 상관없이 처음에 100개의 아이템 컴포넌트를 모두
    // 만들어 놓기에 메모리 문제도 있고.. 뷰의 재활용이 이루어지지 못함.
    // 안드로이드 native app의 ListView처럼 뷰의 재활용 기능을 가진 React Natvie의 컴포넌트 사용 해보기
    // Ex09ListView  


}//MainComponent class...

// 스타일객체
const style= StyleSheet.create({
    container:{
        flex:1,
        padding:16
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight: 8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic',
    }

    
});
