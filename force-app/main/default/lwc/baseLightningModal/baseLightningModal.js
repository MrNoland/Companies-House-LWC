import { api } from 'lwc';
import LightningModal from 'lightning/modal'

export default class BaseLightningModal extends LightningModal  {
    @api flowAPI;
    @api recordId;
    @api compHouseNumber;

    get inputVariables() {
        return [
            {
                name: 'Companies_House_Number',
                type: 'String',
                value: this.compHouseNumber,
            },
            {
                name: 'recordId',
                type: 'String',
                value: this.recordId,
            },
        ];
    }
    
    handleStatusChange(event) {
        if (event.detail.status === 'FINISHED') {
            this.close('done');
            window.location.reload();
        }
    }

    handleSave() {
    }
}