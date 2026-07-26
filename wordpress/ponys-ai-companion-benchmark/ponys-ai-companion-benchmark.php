<?php
/**
 * Plugin Name: Ponys AI Companion Benchmark
 * Plugin URI: https://feeds.ponys.ai/integrations/
 * Description: A self-contained AI companion benchmark calculator with an optional, publisher-enabled research attribution.
 * Version: 1.0.0
 * Requires at least: 6.2
 * Requires PHP: 7.4
 * Author: Ponys.ai
 * Author URI: https://ponys.ai/
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ponys-ai-companion-benchmark
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render the benchmark shortcode.
 *
 * Links are disabled by default and must be enabled by the publisher.
 *
 * @param array<string, string> $attributes Shortcode attributes.
 * @return string
 */
function ponys_ai_benchmark_shortcode( $attributes ) {
	$attributes = shortcode_atts(
		array(
			'title'      => __( 'AI Companion Benchmark', 'ponys-ai-companion-benchmark' ),
			'show_links' => 'no',
		),
		$attributes,
		'ponys_ai_benchmark'
	);

	$id         = wp_unique_id( 'ponys-ai-benchmark-' );
	$show_links = 'yes' === strtolower( $attributes['show_links'] );
	$labels     = array(
		__( 'Memory', 'ponys-ai-companion-benchmark' ),
		__( 'Persona consistency', 'ponys-ai-companion-benchmark' ),
		__( 'Boundaries', 'ponys-ai-companion-benchmark' ),
		__( 'Privacy', 'ponys-ai-companion-benchmark' ),
		__( 'Visual identity', 'ponys-ai-companion-benchmark' ),
	);

	ob_start();
	?>
	<section id="<?php echo esc_attr( $id ); ?>" class="ponys-ai-benchmark" aria-label="<?php echo esc_attr( $attributes['title'] ); ?>">
		<h2><?php echo esc_html( $attributes['title'] ); ?></h2>
		<?php foreach ( $labels as $label ) : ?>
			<label>
				<?php echo esc_html( $label ); ?>
				<input type="range" min="0" max="5" step="1" value="3">
			</label>
		<?php endforeach; ?>
		<p class="ponys-ai-benchmark__score"><?php esc_html_e( 'Benchmark score: 60/100', 'ponys-ai-companion-benchmark' ); ?></p>
		<?php if ( $show_links ) : ?>
			<p class="ponys-ai-benchmark__links">
				<a href="https://feeds.ponys.ai/research/50-turn-nsfw-roleplay-memory-decay.html" rel="nofollow noopener" target="_blank">
					<?php esc_html_e( 'Open evaluation method', 'ponys-ai-companion-benchmark' ); ?>
				</a>
				<a href="https://ponys.ai/ai-character-generator?utm_source=wordpress&amp;utm_medium=embed&amp;utm_campaign=benchmark_plugin" rel="nofollow noopener" target="_blank">
					<?php esc_html_e( 'Explore Ponys.ai', 'ponys-ai-companion-benchmark' ); ?>
				</a>
			</p>
		<?php endif; ?>
	</section>
	<style>
		#<?php echo esc_attr( $id ); ?>{border:1px solid #cfd6dd;border-left:4px solid #087f5b;padding:16px;max-width:620px}
		#<?php echo esc_attr( $id ); ?> h2{font-size:1.2rem;margin:0 0 12px}
		#<?php echo esc_attr( $id ); ?> label{display:grid;gap:4px;margin:8px 0;font-weight:600}
		#<?php echo esc_attr( $id ); ?> input{width:100%}
		#<?php echo esc_attr( $id ); ?> .ponys-ai-benchmark__score{font-size:1.1rem;font-weight:700}
		#<?php echo esc_attr( $id ); ?> .ponys-ai-benchmark__links{display:flex;gap:14px;flex-wrap:wrap}
	</style>
	<script>
	(function(){
		var root=document.getElementById(<?php echo wp_json_encode( $id ); ?>);
		if(!root){return;}
		var inputs=Array.prototype.slice.call(root.querySelectorAll('input[type="range"]'));
		var output=root.querySelector('.ponys-ai-benchmark__score');
		function update(){
			var total=inputs.reduce(function(sum,input){return sum+Number(input.value);},0);
			output.textContent=<?php echo wp_json_encode( __( 'Benchmark score:', 'ponys-ai-companion-benchmark' ) ); ?>+' '+Math.round(total/inputs.length*20)+'/100';
		}
		inputs.forEach(function(input){input.addEventListener('input',update);});
		update();
	}());
	</script>
	<?php
	return ob_get_clean();
}
add_shortcode( 'ponys_ai_benchmark', 'ponys_ai_benchmark_shortcode' );
