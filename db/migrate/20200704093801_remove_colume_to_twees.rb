class RemoveColumeToTwees < ActiveRecord::Migration[5.2]
  def change
    remove_column :tweets, :product_id, :integer
  end
end
