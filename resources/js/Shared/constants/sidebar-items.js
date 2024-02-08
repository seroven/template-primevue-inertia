
import { SidebarTypeItem } from "./sidebar-type-item";



export const SidebarItems = [
    {
        name: 'Opciones',
        type: SidebarTypeItem.TITLE
    },
    {
        name: 'Inicio',
        path: '/panel/home',
        icon: 'pi-home',
        type: SidebarTypeItem.ITEM
    },
    {
        name: 'Configuración',
        path: '/pa/settings',
        icon: 'pi-cog',
        type: SidebarTypeItem.DROPDOWN_ITEMS,
        children: [
            {
                name: 'Usuarios',
                path: '/users',
            },
        ]
    },
]