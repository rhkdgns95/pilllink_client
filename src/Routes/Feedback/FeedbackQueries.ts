import { gql } from "apollo-boost";

export const CREATE_CONFIRM = gql`
    mutation createConfirm(
            $data: [CreateConfirmVariables!]!
        # $medicalRecordId: Int!
        # $res_amount: RES_AMOUNT!
        # $res_way: RES_WAY!
        
        # $TO_MORNING: Boolean
        # $TO_LUNCH: Boolean
        # $TO_DINNER: Boolean
        # $TO_SLEEP: Boolean

        # $CAUTION_SLEEP: Boolean
        # $CAUTION_STOMACAHCHE: Boolean
        # $CAUTION_RASH: Boolean
        # $CAUTION_DIZZY: Boolean
        # $CAUTION_DIARRHEA: Boolean
        # $CAUTION_BLOODPRESSURE: Boolean
    ) {
        CreateConfirm(
            data: $data
            # medicalRecordId: $medicalRecordId
            # res_amount: $res_amount
            # res_way: $res_way
            
            # TO_MORNING: $TO_MORNING
            # TO_LUNCH: $TO_LUNCH
            # TO_DINNER: $TO_DINNER
            # TO_SLEEP: $TO_SLEEP

            # CAUTION_SLEEP: $CAUTION_SLEEP
            # CAUTION_STOMACAHCHE: $CAUTION_STOMACAHCHE
            # CAUTION_RASH: $CAUTION_RASH
            # CAUTION_DIZZY: $CAUTION_DIZZY
            # CAUTION_DIARRHEA: $CAUTION_DIARRHEA
            # CAUTION_BLOODPRESSURE: $CAUTION_BLOODPRESSURE
        ) {
            ok
            error
        }
    }
`;