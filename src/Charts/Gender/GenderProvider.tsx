import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-apollo";
import { getGender, getGender_GetGenders_monthGender, getGenderVariables } from "../../Types/api";
import { GET_GENDERS } from "./GenderQueries";

interface IContext {
    gender: getGender_GetGenders_monthGender | null;
    loading: boolean;    
    isModal: boolean;
    toggleModal: () => any;
}

const InitContext: IContext = {
    gender: null,
    loading: false,
    isModal: false,
    toggleModal: () => {}
};

const GenderContext: React.Context<IContext> = createContext<IContext>(InitContext);

const useGenderContext = () => useContext(GenderContext);

const useFetch = (): { value: IContext } => {
    const { data, loading } = useQuery<getGender, getGenderVariables>(GET_GENDERS, {
        variables: {
            dateFrom: null,
            dateTo: null
        },
        onCompleted: data => {
            console.log("GetGenders onCompleted: ", data);
        },
        onError: data => {
            console.log("GetGenders onError: ", data);
        }
    });
    const [isModal, setIsModal] = useState<boolean>(false);
    
    const toggleModal = () => {
        setIsModal(!isModal);
    }

    const genders = data ? data.GetGenders.monthGender : null;
    console.log("DATA: ", data);
    return {
        value: {
            gender: genders ? genders[0] : null,
            loading,
            isModal,
            toggleModal
        }
    };
}

const GenderProvider: React.FC<any> = ({
    children
}) => (
    <GenderContext.Provider { ...useFetch() }>
        {
            children
        }
    </GenderContext.Provider>
);

export { useGenderContext };
export default GenderProvider;