<div class="btn-group btn-group-toggle w-100" x-data="{priority: @entangle($attributes->wire('model'))}">
    <label class="btn btn-outline-success" :class="{'active': priority == 'LOW'}" style="cursor: pointer">
        <input type="radio" name="option-priority" value="LOW" x-model="priority">
        <span>Thấp</span>
    </label>
    <label class="btn btn-outline-primary" :class="{'active': priority == 'MEDIUM'}" style="cursor: pointer">
        <input type="radio" name="option-priority" value="MEDIUM" x-model="priority">
        <span>Trung bình</span>
    </label>
    <label class="btn btn-outline-danger" :class="{'active': priority == 'HIGH'}" style="cursor: pointer">
        <input type="radio" name="option-priority" value="HIGH" x-model="priority">
        <span>Cao</span>
    </label>
</div>
