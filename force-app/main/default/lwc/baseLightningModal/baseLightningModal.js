import { api } from 'lwc';
import LightningModal from 'lightning/modal'

export default class BaseLightningModal extends LightningModal  {
    @api content;
    
    handleClose() {
        this.close('done');
    }

    handleSave() {
    }
}