
Gem::Specification.new do |spec|
  spec.name = "ponys-ai-resources"
  spec.version = "0.3.0"
  spec.summary = "Official Ponys.ai public resource helpers"
  spec.description = "Resolve product URLs and multilingual public feeds for publisher integrations."
  spec.authors = ["Ponys.ai"]
  spec.email = ["contact@ponys.ai"]
  spec.homepage = "https://ponys.ai/"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 2.6"
  spec.files = Dir["lib/**/*", "README.md"]
  spec.require_paths = ["lib"]
  spec.metadata = {
    "source_code_uri" => "https://github.com/wujoe132/ponys-ai-resources-ruby",
    "documentation_uri" => "https://feeds.ponys.ai/integrations/"
  }
end
