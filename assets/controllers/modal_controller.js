import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['dialog', 'content', 'loadingTemplate'];

    observer = null;

    connect() {
        if (this.hasContentTarget) {
            // create a mutation observer on this.modalContentTarget
            // when the content changes, call this.open()
            this.observer = new MutationObserver(() => {
                const shouldOpen = this.contentTarget.innerHTML.trim().length > 0;

                if (shouldOpen && !this.dialogTarget.open) {
                    this.open();
                } else if (!shouldOpen && this.dialogTarget.open) {
                    this.close();
                }
            });
            this.observer.observe(this.contentTarget, {
                childList: true,
                characterData: true,
                subtree: true
            });
        }
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.dialogTarget.open) {
            this.close();
        }
    }

    open() {
        this.dialogTarget.showModal();
        document.body.classList.add('overflow-hidden', 'blur-sm');
    }

    close() {
        this.dialogTarget.close();
        document.body.classList.remove('overflow-hidden', 'blur-sm');
    }

    clickOutside(event) {
        if (event.target === this.dialogTarget) {
            this.dialogTarget.close();
        }
    }

    showLoading(event) {
        // do nothing if the dialog is already open
        if (this.dialogTarget.open) {
            return;
        }

        this.contentTarget.innerHTML = this.loadingTemplateTarget.innerHTML;
    }
}
