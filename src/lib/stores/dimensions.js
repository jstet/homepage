import { writable, derived } from 'svelte/store';

const footer_height = 50
const sub_header_height = 300

export const window_dims = writable({
    window_width: 0,
    window_height: 0,
});

export const dims = derived(
    window_dims,
    $window_dims => {
        var p1_p_top = 0;
        var p2_p_top = 0;
        var header_height = 0;
        var doc_height = 0;
        var p1_height = 0;
        var p2_height = 0;
        
        if ($window_dims.window_width > 1024) {
            doc_height = 2 * $window_dims.window_height
            header_height = 100
            p1_p_top = header_height + sub_header_height
            p2_p_top = header_height + sub_header_height
            p1_height = $window_dims.window_height
            p2_height = $window_dims.window_height
        }
        else {
            p1_p_top = 0
            header_height = 80
            p1_height = $window_dims.window_height - header_height - sub_header_height
            p2_height = $window_dims.window_height
            p2_p_top = header_height 
        }
        return {
            header_height,
            footer_height,
            sub_header_height,
            p1_p_top,
            p2_p_top,
            doc_height,
            p1_height,
            p2_height
        }
    }
);