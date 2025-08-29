import { html } from '@devwareng/vanilla-ts';
import { useUniqueId } from '../hooks';

type PillarProps = Partial<string>

export default function Pillar(className: PillarProps = 'bg-black') {

    const { dataId } = useUniqueId();

    const ui = html`
        <div data-id="${dataId}" class="flex items-center gap-1">
            <div class='w-10 ${className} h-[2px]'></div>
            <div class="flex items-center font-semibold ${className === 'bg-black' ? 'text-black' : 'text-white'}">
                <div>\\\\</div>
                <div>V</div>
                <div>//</div>
            </div>
            <div class='w-10 ${className} h-[2px]'></div>
        </div>
        `

    return ui

}
