class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.text :body
      t.integer :parent_id
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
