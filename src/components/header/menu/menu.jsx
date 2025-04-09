import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from '@/components/ui/menubar';

export function Menu() {
	return (
		<nav>
			<Menubar>
				<MenubarMenu>
					<MenubarTrigger>Categorias</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem checked>
							Cozinha <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Games <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Informática <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Celulares <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Refrigeração <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Áudio <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarCheckboxItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Tipo de Produto</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem checked>
							Simples <MenubarShortcut></MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Com Variação <MenubarShortcut></MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Kit <MenubarShortcut></MenubarShortcut>
						</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem>
							Kit com Variação <MenubarShortcut></MenubarShortcut>
						</MenubarCheckboxItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Status</MenubarTrigger>
					<MenubarContent>
						<MenubarCheckboxItem>Ativo</MenubarCheckboxItem>
						<MenubarSeparator />
						<MenubarCheckboxItem checked>Inativo</MenubarCheckboxItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</nav>
	);
}
