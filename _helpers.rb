require 'haml-coderay'
FEED_URL = "http://www.llopez.local.com.ar/feed/atom.xml"
module Helpers
  #def render(options = {}) 
  #end
  def header
    ['Curriculum', 'Proyectos', 'Fotos']
    haml_tag :div, "este es el header"
  end
  def image(image_path, options={})
    options.merge!({:src => "/images/#{image_path}"})
    haml_tag :img, options
  end
  def title(page)
  ">_ /posts/" + page.categories.join("/") + "/" + page.title.gsub(" ","_")
  end
  def categories(post)
    post.categories.collect do |category|
      haml_tag :span,{:class => category} do
        haml_tag :a, {:href => "/#{category}.html", :title => "ir a categoria #{category}" } do  
          haml_concat "--#{category}"
        end
      end
    end
  end
end