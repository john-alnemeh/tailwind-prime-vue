export default {
    root: ({ context }) => ({
        class: [
            'flex items-center justify-between bg-surface-0 text-surface-600 p-[1.125rem] font-semibold outline-transparent',
            {
                'focus-visible:outline-offset-2 focus-visible:ring-1 focus-visible:ring-primary-500': !context.disabled
            }
        ]
    }),
    toggleIcon: 'inline-block text-surface-900 w-4 h-4'
};
