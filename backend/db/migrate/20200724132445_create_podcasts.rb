class CreatePodcasts < ActiveRecord::Migration[6.0]
  def change
    create_table :podcasts do |t|
      t.string :name
      t.string :hosts
      t.string :genres
      t.string :link

      t.timestamps
    end
  end
end
