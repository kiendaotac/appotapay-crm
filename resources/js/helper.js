window.linkify = function(text) {
    var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" class="text-primary">${url}</a>`;
    });
};

window.clean_comment_input = function(text) {
    return $(`<div>${text}</div>`)
        .find('a')
        .replaceWith(function() {
            return this.innerHTML;
        })
        .end()
        .find('img')
        .remove()
        .end()
        .find('script')
        .remove()
        .end()
        .find('[style]')
        .removeAttr('style')
        .end()
        .find('[x-html]')
        .removeAttr('x-html')
        .end()
        .find('[x-text]')
        .removeAttr('x-text')
        .end()
        .html();
};
