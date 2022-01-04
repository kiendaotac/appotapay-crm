<div wire:ignore class="dropdown dropdown-inline"
    x-data="{menu: null, stringee_routing_type: @entangle('stringee_routing_type'), stringee_routing_phone: @entangle('stringee_routing_phone'), callRoutings: @entangle('callRoutings'), get callRoutingValue() { return this.callRoutings[this.stringee_routing_type] }}"
    x-init="menu = $($refs.trigger);menu.dropdown('hide')">
    <button type="button" class="btn btn-default btn-icon-sm dropdown-toggle" aria-haspopup="true" aria-expanded="false"
        x-ref="trigger" x-on:click="menu.dropdown('toggle')">
        <i class="fas fa-phone-alt"></i>
        <span x-text="callRoutingValue"></span>
    </button>
    <div class="dropdown-menu p-4 dropdown-menu-right" x-on:click.away="menu.dropdown('hide')">
        <div class="kt-nav__section kt-nav__section--first">
            <span class="kt-nav__section-text">Điều hướng cuộc gọi</span>
        </div>
        <div class="dropdown-divider"></div>
        <div class="form-group">
            <label>
                <input type="radio" x-model="stringee_routing_type" value="APP">
                Qua CRM Panel
            </label>
        </div>
        <div class="form-group">
            <label>
                <input type="radio" x-model="stringee_routing_type" value="PHONE">
                Qua SĐT
            </label>
            <input type="text" class="form-control" x-model.lazy="stringee_routing_phone" placeholder="SĐT"
                x-bind:disabled="stringee_routing_type !== 'PHONE'">
        </div>
        <div class="form-group text-right">
            <x-custom.action-message on="stringee-routing-info-saved" />
            <button type="submit" class="btn btn-primary" wire:click.prevent="save" wire:loading.attr="disabled"
                wire:loading.class="kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light">Save</button>
        </div>
    </div>
</div>
