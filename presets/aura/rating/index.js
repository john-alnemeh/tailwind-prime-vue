export default {
    root: ({ props }) => ({
        class: [
            'relative',


            // Flex & Alignment
            'flex items-center',
            'gap-1',

            // Misc
            {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled,
            }
        ]
    }),
    option: ({ props, context }) => ({
        class: [
            // Flex & Alignment
            'inline-flex items-center',

            // State
            {
                'outline-none ring-1 ring-primary-500/50': context.focused
            },

            // Misc
            {
                'cursor-pointer': !props.readonly,
                'cursor-default': props.readonly,
            }
        ]
    }),
    offIcon: ({ props }) => ({
        class: [
            // Size
            'w-4 h-4',

            // Color
            'text-yellow-400 ',

            // State
            { 'hover:text-yellow-400 ': !props.readonly },

            // Transition
            'transition duration-200 ease-in'
        ]
    }),
    onIcon: ({ props }) => ({
        class: [
            // Size
            'w-4 h-4',

            // Color
            'text-yellow-400',

            // State
            { 'hover:text-yellow-400 ': !props.readonly },

            // Transition
            'transition duration-200 ease-in'
        ]
    })
};
