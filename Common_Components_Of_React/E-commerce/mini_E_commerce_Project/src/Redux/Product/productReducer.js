import { IS_ERROR, IS_LOADONG, STORE_CURRPRO_DATA, STORE_DATA,IS_CURRENTPRO_LOADONG,IS_CURRENTPRO_ERROR} from "./action"



const init = {
   isError : false,
   isLoading:false,
   isCurrProLoading:false,
   isCurrProError:false,
   storeData:[],
   currentProduct : {}
}

export const productReducer = (store=init,{type,payload})=>{
    switch(type){
        case IS_LOADONG : return{...store,isLoading:store.isLoading=true}
        case IS_ERROR : return {...store,isLoading:store.isLoading=false,isError:store.isError=true}
        case STORE_DATA : return {...store,isLoading:store.isLoading=false,isError:store.isError=false,storeData:store.storeData=payload}
        case IS_CURRENTPRO_LOADONG : return {...store,isCurrProLoading:true}
        case IS_CURRENTPRO_ERROR : return {...store,isCurrProLoading:false,isCurrProError:true}
        case STORE_CURRPRO_DATA: return {...store,isCurrProLoading:false,isCurrProError:true,currentProduct:payload}
        default: return {...store}
    }

}