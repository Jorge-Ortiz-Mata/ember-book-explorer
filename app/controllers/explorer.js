import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ExplorerController extends Controller {
  @tracked topicSelected = "N/A";

  topicOptions = [
    { label: "Selecciona un tema", value: "" },
    { label: "Science Fiction", value: "science_fiction" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Romance", value: "romance" },
    { label: "History", value: "history" },
    { label: "Horror", value: "horror" },
  ];

  @action
  onChange(value) {
    this.topicSelected = value;
  }
}