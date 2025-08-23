import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function ImageDivider(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
            <div class="flex items-center">
                <div class="h-[1px] w-full bg-black"></div>
                <img src="/profile.webp" alt="profile image" width="100" height="100" class="rounded-full bg-white p-1 shadow-md">
                <div class="h-[1px] w-full bg-black"></div>
            </div>
`
    );
    
    return ui
}