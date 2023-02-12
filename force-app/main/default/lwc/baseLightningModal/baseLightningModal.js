import { api } from 'lwc';
import LightningModal from 'lightning/modal'

export default class BaseLightningModal extends LightningModal  {
    @api flowAPI;

    handleClose() {
        this.close('done');
    }

    handleSave() {
    }
}