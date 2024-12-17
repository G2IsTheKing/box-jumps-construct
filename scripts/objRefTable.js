const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.Rotate,
		C3.Plugins.Particles,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{Solid: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Rotate: 0},
	{obstacle2: 0},
	{Sprite5: 0},
	{Particles: 0},
	{Score_label: 0},
	{Score_Scrore: 0},
	{block: 0},
	{TiledBackground: 0},
	{barrier: 0},
	{Sprite6: 0},
	{score: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	obstacle2: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Score_label: class extends self.ITextInstance {},
	Score_Scrore: class extends self.ITextInstance {},
	block: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	barrier: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {}
}