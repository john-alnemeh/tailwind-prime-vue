export default {
    root: ({ context, props, parent }) => ({
        class: [
            // Font
            'leading-none',

            // Spacing
            'm-0 py-2 px-3',

            // Colors
            'text-surface-800 ',
            'placeholder:text-surface-400 ',
            { 'bg-surface-0 ': !context.disabled },

            'border',
            { 'border-surface-300 ': !props.invalid },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500 ': props.invalid },

            // States
            {
                'hover:border-surface-400 ': !context.disabled && !props.invalid,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500  focus:z-10': !context.disabled,
                'bg-surface-200  select-none pointer-events-none cursor-default': context.disabled
            },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== null && props.modelValue?.length !== 0 },

            // Misc
            'rounded-md',
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
};
