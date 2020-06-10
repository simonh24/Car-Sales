import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/featuresActions";

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const featuresReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_FEATURE: // add price, add to features to list.
            const newFeature = state.additionalFeatures.find(feature => feature.id === action.payload);
            const featureIndex = state.car.features.findIndex(feature => feature.id === action.payload);
            console.log(newFeature);
            if (featureIndex !== -1) {
                return state;
            }
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, newFeature]
                },
                additionalPrice: state.additionalPrice + newFeature.price
            };
        case REMOVE_FEATURE:
            const featIndex = state.car.features.findIndex(feature => feature.id === action.payload);
            const featurePrice = state.car.features[featIndex].price;
            const newFeatures = JSON.parse(JSON.stringify(state.car.features));
            newFeatures.splice(featIndex, 1);
            return {
                ...state,
                car: {
                    ...state.car,
                    features: newFeatures
                },
                additionalPrice: state.additionalPrice - featurePrice
            };
        default:
            return state;
    }
}