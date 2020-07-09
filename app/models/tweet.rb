class Tweet < ApplicationRecord
  has_many :childs, foreign_key: "parent_id", class_name: 'Tweet'
  mount_uploader :image, TweetUploader
end
