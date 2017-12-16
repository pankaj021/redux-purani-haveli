const loadingHaveliData = ()=> {
    const puraniHaveliData = puraniHaveliInternalDataCall()
    return {
        type : "LOAD_HAVELI_DATA",
        payload : {...puraniHaveliData, personClicked : ""}
    }
}

function puraniHaveliInternalDataCall(){
    const data = {
        flatName : "Purani Haveli",
        roomDetails : {
            noOfWashRooms : 1,
            noOfBedRooms : 2,
            noOfHalls : 1,
            isTempleThere : true,
            isFurnished : false,
            maxNoOfPeopleToStay : 6
        },
        flatDetails : {
            flatType : "2-BHK",
            owner : "Nandan",
            mobile : 9734567890,
            address : "Near HDFC ATM , Roopena Agrahara (560068)"
        },
        roomMatesList : [
            {
                name : "Pankaj Maurya",
                details : {
                    age : 23,
                    mobile : 9087654321,
                    more : [
                        "Loves cricket ,both playing and watching",
                        "hates if people tell lies",
                        "hates if people want him to do what they like to do"
                    ]
                },
                didPayRent : false,
                flatRating : 1.5
            },
            {
                name : "Vinit Rohela",
                details : {
                    age : 24,
                    mobile : 8334444321,
                    more : [
                        "Loves sleeping",
                        "is clever",
                        "too lazy to walk",
                    ]
                },
                didPayRent : true,
                flatRating : 3.5
            },
            {
                name : "Abhishek Baba",
                details : {
                    age : 25,
                    mobile : 7832214321,
                    more : [
                        "is very punchual and strict",
                        "bakloli ke ustaad"
                    ]
                },
                didPayRent : true,
                flatRating : 2
            },
            {
                name : "KK Nayak",
                details : {
                    age : 23,
                    mobile : 9030044321,
                    more : [
                        "data not found"
                    ]
                },
                didPayRent : true,
                flatRating : 3
            },
            {
                name : "Shubham Mishra",
                details : {
                    age : 24,
                    mobile : 7834400021,
                    more : [
                        "Loves chubby girls",
                        "Loves singing"
                    ]
                },
                didPayRent : false,
                flatRating : 2
            },
        ]
    }
    return data;
}

const toggleShowHideCliked = (personName)=> {
    return({
        type : "TOGGLE_SHOW_HIDE",
        payload : personName
    })
}

const deleteADetail = (personName)=>{
    return({
        type : "DELETE_A_RECORD",
        payload : personName
    })
}

module.exports = {
    loadingHaveliData,
    toggleShowHideCliked,
    deleteADetail
}