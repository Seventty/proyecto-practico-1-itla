import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IModalConfig } from '@interfaces/IModalConfig';
import { IModalOption } from '@interfaces/IModalOptions';

@Component({
  selector: 'UIModal',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponent implements OnInit {

  /**
   * Configuración del modal
   * @type {IModalConfig | undefined}
   */
  @Input() modalConfig?: IModalConfig

  /**
   * Opciones del modal
   * @type {IModalOption | undefined}
   */
  @Input() modalOption?: IModalOption

  /**
   * Contenido del modal
   * @type {TemplateRef<ModalComponent> | undefined}
   */
  @ViewChild('modal') private modalContent?: TemplateRef<ModalComponent>

  /**
   * Referencia al modal de NgbModal
   * @type {NgbModalRef | undefined}
   */
  private modalRef?: NgbModalRef | undefined

  /**
   * Contenido del cuerpo del modal
   * @type {TemplateRef<any> | undefined}
   */
  @ContentChild('modalBody') contentRef?: TemplateRef<any>

  /**
   * Constructor que inyecta la configuración y el servicio de NgbModal
   * @param {NgbModalConfig} config - Configuración del modal
   * @param {NgbModal} modalService - Servicio para gestionar modales
   */
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static'
    config.keyboard = false
  }

  /**
   * Inicialización del componente
   */
  ngOnInit(): void {
  }

  /**
   * Obtiene el estado de cierre del modal
   * @returns {Promise<any> | undefined}
   */
  get modalClosed() {
    return this.modalRef?.closed
  }

  /**
   * Obtiene el estado de descarte del modal
   * @returns {Promise<any> | undefined}
   */
  get modalDismissed() {
    return this.modalRef?.dismissed
  }

  /**
   * Abre el modal
   * @returns {Promise<boolean>}
   */
  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent, { ...this.modalOption })
      this.modalRef.result.then(resolve, resolve)
    })
  }

  /**
   * Cierra el modal después de ejecutar la función onClose
   * @returns {Promise<void>}
   */
  async close(): Promise<void> {
    if (this.modalConfig?.shouldClose === undefined || (await this.modalConfig.shouldClose())) {
      const result = this.modalConfig?.onClose === undefined || (await this.modalConfig.onClose())
      this.modalRef?.close(result)
    }
  }

  /**
   * Descarta el modal después de ejecutar la función onDismiss
   * @returns {Promise<void>}
   */
  async dismiss(): Promise<void> {
    if (this.modalConfig?.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())) {
      const result = this.modalConfig?.onDismiss === undefined || (await this.modalConfig.onDismiss())
      this.modalRef?.dismiss(result)
    }
  }
}
