<div class="kt-scroll kt-scroll--pull" data-mobile-height="300" wire:ignore.self>
    <div class="kt-chat__messages" x-data="setup_list_comment_ticket()" x-ref="comment_box"
        x-init="init_list_comment_ticket()">
        <template x-for="(item, index) in comments" :key="index">
            {{-- <span x-text="item.id != __user__.id"></span> --}}
            <div>
                <template x-if="item.id == __user__.id">
                    <div class="kt-chat__message kt-chat__message--right">
                        <div class="kt-chat__user">
                            <span class="kt-chat__datetime" data-container="body" data-toggle="kt-tooltip" data-placement="top"
                                x-bind:data-original-title="item.pivot.created_at" x-text="item.pivot.diff_for_now"></span>
                            <a href="#" class="kt-chat__username"><span x-text="item.name"></span></a>
                            <span class="kt-media kt-media--circle kt-media--sm">
                                <img x-bind:src="item.avatar_url" alt="image">
                            </span>
                        </div>
                        <div class="kt-chat__text text-break kt-bg-light-brand" x-html="item.pivot.content">
                        </div>
                    </div>
                </template>
                <template x-if="item.id != __user__.id">
                    <div class="kt-chat__message">
                        <div class="kt-chat__user">
                            <span class="kt-media kt-media--circle kt-media--sm">
                                <img x-bind:src="item.avatar_url" alt="image">
                            </span>
                            <a href="#" class="kt-chat__username"><span x-text="item.name"></span></a>
                            <span class="kt-chat__datetime" data-container="body" data-toggle="kt-tooltip" data-placement="top"
                                x-bind:data-original-title="item.pivot.created_at" x-text="item.pivot.diff_for_now"></span>
                        </div>
                        <div class="kt-chat__text text-break kt-bg-light-success" x-html="item.pivot.content">
                        </div>
                    </div>
                </template>
            </div>

        </template>
        {{-- <div class="kt-chat__message">
            <div class="kt-chat__user">
                <span class="kt-media kt-media--circle kt-media--sm">
                    <img src="/assets/media/users/100_12.jpg" alt="image">
                </span>
                <a href="#" class="kt-chat__username">Jason Muller</span></a>
                <span class="kt-chat__datetime">2 Hours</span>
            </div>
            <div class="kt-chat__text kt-bg-light-success d-inline-flex">
                How likely are you to recommend our company <br>to your friends
                and family?
            </div>
        </div> --}}
    </div>
</div>

@push('js')
<script>
    function setup_list_comment_ticket() {
        return {
            comments: @entangle($attributes->wire('model')).defer,
            chatContainer: KTUtil.getByID('kt_chat_content'),
            perform_scroll() {
                this.$nextTick(() => {
                    KTChat.scrollBottom(this.chatContainer);
                })
            },
            init_list_comment_ticket() {
                KTChat.setup(this.chatContainer);
                this.perform_scroll();
                this.$watch('comments', () => this.perform_scroll());
            }
        }
    }


</script>
@endpush
